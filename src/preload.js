import { contextBridge, ipcRenderer } from "electron";


contextBridge.exposeInMainWorld('ApiElectron', {
    saveDataSurvery: (record) => ipcRenderer.invoke('saveDataSurvery', record)
})