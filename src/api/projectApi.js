import { BASE_URL, EXTENSION, PRJ } from "../constant";
export const addProject = async (formData, userId) => {
  try {
    const response = await fetch(`${BASE_URL}${EXTENSION}${PRJ}/addProject/:${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getProject=async(projectId)=>{
    try{
    const response = await fetch(`${BASE_URL}${EXTENSION}${PRJ}/getProject/:${projectId}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export const getAllProjects=async(userId)=>{
    try{
    const response = await fetch(`${BASE_URL}${EXTENSION}${PRJ}/getAllProjects/:${userId}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export const updateProject = async (formData,id) => {
    try {
      const response = await fetch(`${BASE_URL}${EXTENSION}${PRJ}/updateProject/:${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };