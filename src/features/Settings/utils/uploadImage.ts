import { supabase } from "@/lib/supabase/supabase";

/**
 * Uploads a profile picture to the Supabase Storage bucket ‘avatars’.
 * * This function generates a unique filename to prevent data collisions,
 * uploads the raw file, and returns a public URL that can be accessed directly.
 * * @param {File} file - A File object resulting from HTML input or drag-and-drop.
 * @param {string} userName - The user name used as a file name prefix for easy tracing.
 * * @returns {Promise<string>} The public URL of the successfully uploaded image.
 * * @throws {Error} If the upload process fails (e.g., network issues or bucket permissions).
 * * @example
 * const url = await uploadProfileImage(myFile, “john_doe”);
 * console.log(url); // https://xyz.supabase.co/storage/v1/object/public/avatars/public/john_doe-0.123.jpg
 */

export const uploadProfileImage = async (file: File, userName: string) => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${userName}-${Math.random()}.${fileExt}`;
  const filePath = `public/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data } = await supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  return data.publicUrl;
};
