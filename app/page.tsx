import { PlayerAnimation } from "@/components/PlayerAnimation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import SampleCoverImage from "@/public/assets/cover.png";
export default function Home() {
  return (
    <>
      <AuroraBackground showRadialGradient={true}>
        <PlayerAnimation
          textPrimary={["Fly to the moon", "and back"]}
          textSecondary={"HanumanKind"}
          coverImage={SampleCoverImage}
        />
      </AuroraBackground>
    </>
  );
}
