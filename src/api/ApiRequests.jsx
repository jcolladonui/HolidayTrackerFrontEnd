const url_host = "http://localhost:8080";

export function getUser(userId, onSuccess) {
  try {
    fetch(url_host + `/users?userId=${userId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        onSuccess(data);
      });
  } catch (error) {
    console.error("Failed to get user:", error);
  }
}

export function putUser(userId, user, onSuccess) {
  try {
    fetch(url_host + `/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        onSuccess(result);
      });
  } catch (error) {
    console.error("Failed to update user:", error);
  }
}

export function getDepartment(departmentID, onSuccess) {
  try {
    fetch(url_host + `/Department?departmentID=${departmentID}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        onSuccess(data[0]);
      });
  } catch (error) {
    console.error("Failed to fetch department:", error);
  }
}

export function getRole(roleId, onSuccess) {
  try {
    fetch(url_host + `/Role?roleId=${roleId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        onSuccess(data[0]);
      });
  } catch (error) {
    console.error("Failed to fetch role:", error);
  }
}
