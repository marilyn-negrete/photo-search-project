export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  try {
    return window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : "";
  } catch (error) {
    return null;
  }
};

export const getJWToken = () => `Bearer ` + JSON.parse(window.localStorage.getItem("token"));

export const updateRequest = async (obj, url) => {
  try {
    const res = await fetch(`${process.env.API_URL}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getJWToken(),
      },
      body: JSON.stringify(obj),
    });

    if (!res.ok) {
      return {
        data: null,
        status: "error",
      };
    }

    const data = await res.json();
    return {
      data,
      status: "success",
    };
  } catch (error) {
    console.error("Update request Failed");
    return {
      data: null,
      status: "error",
    };
  }
};

export const deleteRequest = async (collection) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/collections/${collection.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: getJWToken(),
        },
        body: JSON.stringify(collection),
      },
    );
    
    if(!res.ok) {
      return {
        data: null,
        status: 'error'
      }
    }

    return {
      data,
      status: 'success'
    }
  } catch (error) {
    console.error('Delete Request Failed');
    return {
        data: null,
        status: 'error'
      }
  }
};