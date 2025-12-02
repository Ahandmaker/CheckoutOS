import { supabase } from '../lib/supabase';

export async function uploadImage(file: File, fileName: string): Promise<string | null> {
  try {
    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

export async function uploadMultipleImages(files: { file: File; name: string }[]): Promise<Record<string, string>> {
  const results: Record<string, string> = {};

  for (const { file, name } of files) {
    const url = await uploadImage(file, name);
    if (url) {
      results[name] = url;
    }
  }

  return results;
}
