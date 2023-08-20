export default function Lights() {
  return (
    <>
      <pointLight position={[0, 3, 0]} color={"#ffffff"} intensity={2.5} />
      <ambientLight color={"#ffffff"} intensity={0.2} />
    </>
  );
}
