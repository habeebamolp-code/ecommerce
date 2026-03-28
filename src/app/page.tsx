import Image from "next/image";

export default function Home() {
  return (
     <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <Image
          src="/banner.png"
          alt="Full Width Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
  
  );
}