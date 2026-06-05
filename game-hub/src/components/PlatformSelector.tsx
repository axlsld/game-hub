import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { type Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();

  if (error || !data) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item key={platform.id} value={platform.name} asChild>
              <Button
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                onClick={() => {
                  console.log("Selected:", platform);
                  onSelectPlatform(platform);
                }}
              >
                {platform.name}
              </Button>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;