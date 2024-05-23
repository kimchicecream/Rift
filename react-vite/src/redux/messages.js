const GET_MESSAGES_BY_CHANNEL = "messages/getMessagesByChannel";
const CREATE_NEW_MESSAGE = "messages/createNewMessage";

const getMessagesByChannel = (messages) => ({
  type: GET_MESSAGES_BY_CHANNEL,
  payload: messages,
});

const createNewMessage = (message) => ({
  type: CREATE_NEW_MESSAGE,
  payload: message,
});

export const createNewMessageThunk =
  (messageObj, channelId) => async (dispatch) => {
    const response = await fetch(`api/messages/${channelId}/new`, {
      method: "POST",
      body: messageObj,
    });
    if (response.ok) {
      newMessage = await response.json();
      dispatch(createNewMessage(newMessage));
      return newMessage;
    } else {
      const error = await response.json();
      console.log(error);
      return error;
    }
  };

export const getMessagesByChannelThunk = (channelId) => async (dispatch) => {
  const messages = await fetch(`/api/messages/${channelId}`);
  const data = await messages.json();
  dispatch(getMessagesByChannel(data));
};

const initialState = {
    channelMessages: [],
};

const messagesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_MESSAGES_BY_CHANNEL: {
      newState = { ...state, channelMessages: action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default messagesReducer;
