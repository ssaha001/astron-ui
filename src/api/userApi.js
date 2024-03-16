import { BASE_URL, EXTENSION, USERS } from "../constant";
export const signupUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}${EXTENSION}${USERS}/signup`, {
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

export const signinUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}${EXTENSION}${USERS}/login`, {
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

export const postRequirement = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}${EXTENSION}${USERS}/addRequirement`, {
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

export const getAllRequirements=async(userId)=>{
  try{
  const response = await fetch(`${BASE_URL}${EXTENSION}${USERS}/getRequirements/:${userId}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
} catch (error) {
  console.error("Error:", error);
  throw error;
}
}