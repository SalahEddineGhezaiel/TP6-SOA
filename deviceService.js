const dbPromise = require('./db');

function toJson(doc) {
  return doc ? doc.toJSON() : null;
}

async function getAll() {
  const { devices } = await dbPromise;
  const docs = await devices.find().exec();
  return docs.map(d => d.toJSON());
}

async function getById(id) {
  const { devices } = await dbPromise;
  const doc = await devices.findOne(id).exec();
  return toJson(doc);
}

async function getByUser(userId) {
  const { devices } = await dbPromise;
  const docs = await devices.find({
    selector: { userId }
  }).exec();
  return docs.map(d => d.toJSON());
}

async function create(data) {
  const { devices, users, createId } = await dbPromise;

  const user = await users.findOne(data.userId).exec();
  if (!user) {
    throw new Error("Utilisateur inexistant");
  }

  const inserted = await devices.insert({
    id: createId(),
    ...data
  });

  return inserted.toJSON();
}

async function update(id, data) {
  const { devices } = await dbPromise;

  const doc = await devices.findOne(id).exec();
  if (!doc) return null;

  const updated = await doc.incrementalPatch(data);
  return updated.toJSON();
}

async function remove(id) {
  const { devices } = await dbPromise;

  const doc = await devices.findOne(id).exec();
  if (!doc) return false;

  await doc.remove();
  return true;
}

module.exports = {
  getAll,
  getById,
  getByUser,
  create,
  update,
  remove
};