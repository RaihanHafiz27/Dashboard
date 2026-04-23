/**
 * Converts a File object to a Base64 string.
 * Used for sending image data to APIs that don't support Multipart/Form-Data.
 * * @param file - The File object to be converted.
 * @returns A promise that resolves with the Base64 string representation of the file.
 * @throws Will reject if the file reading process fails.
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
