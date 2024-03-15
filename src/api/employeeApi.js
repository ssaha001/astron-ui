import { BASE_URL, EXTENSION, EMP } from "../constant";
export const addEmployee = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}${EXTENSION}${EMP}/signup`, {
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

export const getEmployee=async(userId)=>{
    try{
    const response = await fetch(`${BASE_URL}${EXTENSION}${EMP}/getEmp/:${userId}?start_date=2024-03-13&end_date=2024-03-20`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export const assignEmployee = async (formData,id,date) => {
    try {
      const response = await fetch(`${BASE_URL}${EXTENSION}${EMP}/schedule/:${id}?date=${date}`, {
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