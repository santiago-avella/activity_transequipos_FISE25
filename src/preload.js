import { contextBridge, ipcRenderer } from "electron";


contextBridge.exposeInMainWorld('ApiElectron', {
    saveDataSurvery: (record) => ipcRenderer.invoke('saveDataSurvery', record),
    saveDataGame: (record) =>  ipcRenderer.invoke('saveDataGame', record),
    getRankingGame: () => ipcRenderer.invoke('getRankingGame')
})