import { useState } from 'react';
import { Upload } from 'lucide-react';
import { uploadMultipleImages } from '../utils/uploadImages';

export default function ImageUploader() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<Record<string, string>>({});

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    const filesToUpload = Array.from(files).map(file => ({
      file,
      name: file.name
    }));

    const urls = await uploadMultipleImages(filesToUpload);
    setUploadedUrls(urls);
    setUploading(false);

    console.log('Uploaded images:', urls);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Upload Images</h1>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
          <label className="cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={uploading}
            />
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">
              {uploading ? 'Uploading...' : 'Click to upload images'}
            </p>
            <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
          </label>
        </div>

        {Object.keys(uploadedUrls).length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Uploaded Images:</h2>
            <div className="space-y-2">
              {Object.entries(uploadedUrls).map(([name, url]) => (
                <div key={name} className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-medium text-gray-700 mb-1">{name}</p>
                  <input
                    type="text"
                    value={url}
                    readOnly
                    className="w-full text-xs text-gray-600 bg-white border border-gray-200 rounded px-2 py-1"
                    onClick={(e) => e.currentTarget.select()}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
