const BASE_URL = "https://api.green-api.com";

const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const checkResult = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status} ${res.type}`);
  }
};

export const sendMessage = async (idInstance, apiTokenInstance, raw) => {
  const res = await fetch(
    `${BASE_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
    {
      method: "POST",
      headers: {
        ...HEADERS,
      },
      body: raw,
    }
  );
  return checkResult(res);
};

export const getNotification = async (idInstance, apiTokenInstance) => {
  const res = await fetch(
    `${BASE_URL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
    {
      method: "GET",
      headers: {
        ...HEADERS,
      },
    }
  );
  return checkResult(res);
};

export const deleteNotification = async (
  idInstance,
  apiTokenInstance,
  receiptId
) => {
  const res = await fetch(
    `${BASE_URL}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`,
    {
      method: "DELETE",
      headers: {
        ...HEADERS,
      },
    }
  );
  return checkResult(res);
};
