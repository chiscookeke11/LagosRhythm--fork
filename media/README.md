# Firebase Media Upload Instructions

## 📁 Directory Structure

Your media files should be placed in the following locations:

```
media/
├── pdf/
│   └── yaba-maryland-guide.pdf          # Route guide PDF
├── audio/
│   ├── english/
│   │   └── yaba-maryland-english.mp3    # English language audio guide
│   └── pidgin/
│       └── yaba-maryland-pidgin.mp3     # Pidgin language audio guide
├── images/
│   └── routes/
│       └── ojuelegba-bridge.jpg         # Landmark image
└── videos/
    └── tours/
        └── yaba-maryland.mp4            # Full route video
```

## 🚀 Upload Commands

### 1. **Dry Run** (preview without uploading)

```bash
npm run media:upload -- --dry-run
```

Output shows where each file would be uploaded without actually uploading.

### 2. **Upload from `media/` directory** (default)

```bash
npm run media:upload
```

Uploads all files from the local `media/` directory.

### 3. **Upload from custom directory**

```bash
npm run media:upload -- --media-dir="C:\path\to\your\media"
```

### 4. **Add your real media files**

Place the actual files in the matching folders before uploading:

- `media/pdf/yaba-maryland-guide.pdf`
- `media/audio/english/yaba-maryland-english.mp3`
- `media/audio/pidgin/yaba-maryland-pidgin.mp3`
- `media/images/routes/ojuelegba-bridge.jpg`
- `media/videos/tours/yaba-maryland.mp4`

Then run a dry run first:

```bash
npm run media:upload -- --dry-run
```

If the dry run finds all files, upload them:

```bash
npm run media:upload
```

## 📋 File Requirements

| File                        | Type  | Min Size | Max Size | Notes                    |
| --------------------------- | ----- | -------- | -------- | ------------------------ |
| `yaba-maryland-guide.pdf`   | PDF   | 50 KB    | 10 MB    | Route overview guide     |
| `yaba-maryland-english.mp3` | Audio | 100 KB   | 20 MB    | English narration        |
| `yaba-maryland-pidgin.mp3`  | Audio | 100 KB   | 20 MB    | Pidgin narration         |
| `ojuelegba-bridge.jpg`      | Image | 50 KB    | 5 MB     | Landmark photo (JPG/PNG) |
| `yaba-maryland.mp4`         | Video | 1 MB     | 500 MB   | Route video (H.264, MP4) |

## ✅ Success Indicators

After an **successful upload**, you'll see:

- ✅ "Uploaded successfully" message
- 📖 Firebase Storage URLs (public access links)
- 💾 Files appear in Firebase Console → Storage

## Next Steps

Once files are uploaded, run:

```bash
# Import routes into Firestore
npm run street-rhythm:import
```

This will create the route documents with URLs pointing to your uploaded media files.

## 🔐 Firebase Storage Permissions

The upload script uses your Firebase Admin Service Account credentials, which already has full access to Cloud Storage.

**Public Access**: Media URLs are public and don't require authentication.

**Cache Control**: Files are cached for 24 hours (configurable in the script).

## 🆘 Troubleshooting

| Error                       | Solution                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `Service account not found` | Ensure `lagos-rhythm-19b8a-firebase-adminsdk-fbsvc-e6381d0620.json` exists in project root |
| `File not found`            | Check that the real media files exist in the correct `media/` subdirectories               |
| `Permission denied`         | Verify Firebase Cloud Storage is enabled in your Firebase project                          |
| `Quota exceeded`            | Keep individual file sizes under limits in table above                                     |

## 📝 Script Reference

The upload script (`scripts/upload-media-to-firebase.mjs`):

- Reads files from the `media/` directory
- Uses Firebase Admin SDK for authentication
- Uploads to `lagos-rhythm-19b8a` project
- Sets public access on all files
- Generates shareable URLs
- Supports dry-run mode for testing

Run with `--help` for full options:

```bash
npm run media:upload -- --help
```
