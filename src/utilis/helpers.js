import toast from "react-hot-toast";

// truncate text :
export const baseURL= process.env.NEXT_PUBLIC_BASE_URL
export function truncateText(text, length) {
  if (text?.length <= length) {
    return text;
  }
  return text?.substring(0, length) ;
  // return text?.substring(0, length) + "...";
}
// getRandomPosition
export function getRandomPosition(min = 0, max = 150) {
  return Math.random() * (max - min) + min;
}
// get today
export function getFormattedDate(lng) {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  return today?.toLocaleDateString(lng, options);
}
// for response errors
export const logAndDisplayErrors = (errorResponse) => {
  if (typeof errorResponse === "string" &&(errorResponse.includes("<!DOCTYPE html>")||errorResponse.includes("<!doctype html>"))) {
      toast.error("An unexpected error occurred. Please try again.");
      return;
  }
  if (typeof errorResponse === "object" && !Array.isArray(errorResponse)) {
    for (const field in errorResponse) {
      const errorValue = errorResponse[field];
      if (typeof errorValue === "string") {
        if(field!=="detail"&&field!=="non_field_errors"&&field!=="error"){
          toast.error(`${field} : ${errorValue}`) ;
      }else{
        toast.error(`${errorValue}`) ;
      }
      } else if (Array.isArray(errorValue) && errorValue.length > 0) {
        if(field!=="detail"&&field!=="non_field_errors"&&field!=="error"){
          toast.error(`${field} : ${errorValue[0]}`) ;
        }else{
          toast.error(`${errorValue[0]}`) ;
        }
      }
    }
  } else {
    toast.error("An error occurred while processing your request.");
  }

};
    export const convertFilesToBase64 = async (files) => {
      if (!files || files.length === 0) return [];
      
      const filePromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result;
          const mimeType = base64String.match(/data:([^;]+);base64,/)[1]; 
                  resolve({
                      filename: file.name,
                      type: mimeType,
                      size: file.size,
                      file: reader.result, 
                  });
              };
              reader.onerror = reject;
              reader.readAsDataURL(file);
          });
      });
    
      return Promise.all(filePromises);
    };