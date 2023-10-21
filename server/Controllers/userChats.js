const userChats = require('../Database/userChatModel');

const getUserChats = async (composers) => {
  try {
    const chats = await userChats.findOne({ composers: { $all: composers } });
    return chats.texts || [];
  } catch (error) {
    throw new Error(error.message)
  }
};

const getAllChats = async (req, res) => {
  const { userEmail } = req.user;
  try {
    const allChats = await userChats.find({
      composers: userEmail
    });

    res.status(200).json({
      status: 'Success',
      body: allChats || []
    })
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: error?.message || 'failed to list chats',
      error
    })
  }
}

const saveText = async ({ composers, text, composerEmail }) => {
  try {
    const textDetails = { composerEmail, text };
    const chats = await userChats.findOne({ composers: { $all: composers } });
    if (!chats) {
      const newTexts = await userChats.create({
        composers, texts: [ { ...textDetails } ]
      });
      return newTexts.texts;
    } else {
      chats.texts.push(textDetails);
      await chats.save();
      return chats.texts;
    }
  } catch (error) {
    throw new Error(error.message);
  }
} 

module.exports = { getUserChats, saveText, getAllChats };