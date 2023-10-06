// CREATE
const createUser = async (req, res) => {
  try {
    const users = await req.db.collection('users').find({ is_deleted: { $exists: false } }).toArray();
    res.status(200).json({
      message: 'Successfully get all employee data.',
      data: users
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// READ
const getAllUsers = async (req, res) => {
  try {
    const users = await req.db.collection('users').find({ is_deleted: { $exists: false } }).toArray();
    res.status(200).json({
      message: 'Successfully get all employee data.',
      data: users
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// UPDATE
const updateUser = async (req, res) => {
  try {
    const users = await req.db.collection('users').find({ is_deleted: { $exists: false } }).toArray();
    res.status(200).json({
      message: 'Successfully get all employee data.',
      data: users
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// DELETE
const deleteUser = async (req, res) => {
  try {
    const users = await req.db.collection('users').find({ is_deleted: { $exists: false } }).toArray();
    res.status(200).json({
      message: 'Successfully get all employee data.',
      data: users
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}