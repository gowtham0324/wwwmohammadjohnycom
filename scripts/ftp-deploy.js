require('dotenv').config();
const fs = require('fs');
const path = require('path');
const ftp = require('basic-ftp');

const server = process.env.FTP_SERVER;
const user = process.env.FTP_USERNAME;
const pass = process.env.FTP_PASSWORD;
const remotePath = process.env.FTP_REMOTE_PATH || '/';
const localDist = path.join(__dirname, '..', 'dist');

if (!server || !user || !pass) {
  console.error('Missing FTP_SERVER, FTP_USERNAME or FTP_PASSWORD in environment');
  process.exit(1);
}

async function uploadDir(client, localDir, remoteDir) {
  await client.ensureDir(remoteDir);
  const entries = fs.readdirSync(localDir, { withFileTypes: true });
  for (const entry of entries) {
    const localPath = path.join(localDir, entry.name);
    const remoteFilePath = path.posix.join(remoteDir, entry.name);
    if (entry.isDirectory()) {
      await uploadDir(client, localPath, remoteFilePath);
    } else {
      await client.uploadFrom(localPath, remoteFilePath);
      console.log('Uploaded', remoteFilePath);
    }
  }
}

async function main() {
  const client = new ftp.Client();
  client.ftp.verbose = false;
  try {
    await client.access({ host: server, user: user, password: pass, secure: false });
    console.log('Connected to FTP server', server);
    await uploadDir(client, localDist, remotePath);
    console.log('Deployment complete');
  } catch (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
