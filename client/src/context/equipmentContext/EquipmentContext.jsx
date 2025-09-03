import { createContext, useContext, useState, useEffect } from "react";
import { getAllMachines } from "../../services/equipment/machineServices";
import { getAllPrinters } from "../../services/equipment/printerServices";
import { getAllScaners } from "../../services/equipment/scanerServices";
import { getAllMonitors } from "../../services/equipment/monitorServices";
import { getAllUpss } from "../../services/equipment/upsServices";
import { getAllCables } from "../../services/equipment/cableServices";
import { getAllKeyboards } from "../../services/equipment/keyboardServices";
import { getAllMics } from "../../services/equipment/micServices";
import { getAllMouses } from "../../services/equipment/mouseServices";
import { getAllProjectors } from "../../services/equipment/projectorServices";
import { getAllLaps } from "../../services/equipment/lapServices";


const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [machines, setMachines] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [scaners, setScaners] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [upss, setUpss] = useState([]);
  const [cables, setCables] = useState([]);
  const [keyboards, setKeyboards] = useState([]);
  const [mics,setMics] = useState([]);
  const [mouses, setMouses]= useState([]);
  const [projectores, setProjectores] = useState([]);
  const [laps, setLaps] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchEquipment = async () => {
    setLoading(true);
    try {
      const [machineRes, printerRes, scannerRes, monitorRes, upsRes, cableRes, keyboardRes, micRes, mouseRes, projectorRes, lapRes] = await Promise.all([
        getAllMachines(),
        getAllPrinters(),
        getAllScaners(),
        getAllMonitors(),
        getAllUpss(),
        getAllCables(),
        getAllKeyboards(),
        getAllMics(),
        getAllMouses(),
        getAllProjectors(),
        getAllLaps()
      ]);
      setMachines(machineRes.data);
      setPrinters(printerRes.data);
      setScaners(scannerRes.data);
      setMonitors(monitorRes.data);
      setUpss(upsRes.data);
      setCables(cableRes.data);
      setKeyboards(keyboardRes.data);
      setMics(micRes.data);
      setMouses(mouseRes.data);
      setProjectores(projectorRes.data);
      setLaps(lapRes.data);
    } catch (err) {
      console.error("Error fetching equipment", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <EquipmentContext.Provider value={{ machines, printers, scaners, monitors, upss, cables,keyboards, mics, mouses, projectores, laps,fetchEquipment, loading }}>
      {children}
    </EquipmentContext.Provider>
  );
};

export const useEquipment = () => useContext(EquipmentContext);

