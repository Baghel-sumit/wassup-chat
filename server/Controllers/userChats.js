const userChats = require('../Database/userChatModel');

const getUserChats = async (composers) => {
  try {
    const chats = await userChats.findOne({ composers: { $all: composers } });
    return chats || {};
  } catch (error) {
    throw new Error(error.message)
  }
};

const getAllChats = async (userEmail) => {
  try {
    const chatsToUpdate = await userChats.find({ composers: userEmail });

    const updatePromises = chatsToUpdate.map(async (chat) => {
      chat.activeUsers.push(userEmail);
      return chat.save();
    });

    await Promise.all(updatePromises);

    return chatsToUpdate;
  } catch (error) {
    throw new Error(error.message);
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
      return newTexts;
    } else {
      chats.texts.push(textDetails);
      await chats.save();
      return chats;
    }
  } catch (error) {
    throw new Error(error.message);
  }
} 

module.exports = { getUserChats, saveText, getAllChats };