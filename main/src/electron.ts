import "dotenv/config";
import { BrowserWindow, app, ipcMain } from "electron";
import isDev from "electron-is-dev";
import { formatUrl } from "./utils";

const createWindow = async () => {
  const window = new BrowserWindow({
    width: 720,
    height: 480,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: isDev,
    },
  });

  await window.loadURL(formatUrl("#/"));
  return window;
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("sample-event", () => {
  console.log("Sample event received");
});
