import MeshReact from 'react-mesh';
import Folder from './schemas/Folder';
import VehicleImage from './schemas/VehicleImage';

const Mesh = MeshReact({
  baseUrl: "/api/v1",
  projectName: "demo",
  components: [
    Folder, VehicleImage
  ]
})

export default Mesh;