"use client";
import {
  Title,
  Text,
  TextInput,
  UnstyledButton,
  Blockquote,
  Button,
} from "@mantine/core";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex justify-between items-start w-full h-full px-32 pt-[70px]">
      <div className="text-white flex flex-col gap-4 z-40">
        <Title size="3rem" className=" mt-[25%]">
          Find your place <br /> of dream
        </Title>
        <Text>
          We are glad to have you around. Feel <br /> free to browse our
          website.
        </Text>
        <TextInput
          className="w-60 mt-4"
          placeholder="Find a location"
          radius="xl"
          rightSection={<AiOutlineSearch className="text-[#0193FD]" />}
        />
      </div>
      <Image src="/images/house.svg" alt="" width={1131} height={592} />

      <Image
        src="/images/waveWhite.svg"
        alt=""
        width={2000}
        height={638}
        className="absolute bottom-0 left-0 z-30"
      />
      <Image
        src="/images/waveLightBlue.svg"
        alt=""
        width={2000}
        height={638}
        className="absolute bottom-10 left-0 z-20"
      />
      <Image
        src="/images/waveBlue.svg"
        alt=""
        width={2000}
        height={638}
        className="absolute bottom-20 left-0 z-10"
      />

      <div className="absolute bottom-0 left-0 z-40 flex justify-between w-full items-end">
        <div className="flex items-center">
          <Blockquote
            cite="Presented by PropertyCrest CEO"
            sx={{
              "div > div:first-child": {
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
              },
              cite: {
                marginTop: 0,
              },
            }}
            icon={
              <UnstyledButton>
                <div className="bg-[#0193FD] border-8 border-[#CBE9FF] rounded-full p-2">
                  <BsFillPlayFill color="#fff" />
                </div>
              </UnstyledButton>
            }
          >
            <p className="font-semibold">
              Watch how <span className="text-[#0193FD]">Property</span>
              <span className="text-[#3F51F4]">Crest</span> works
            </p>
          </Blockquote>
        </div>
        <div className="flex flex-col gap-6 items-end text-end p-8">
          <div>
            <Title className="text-[#0193FD]">Be a co-Landlord</Title>
            <Title className="text-[#3F51F4]">Brick by Brick</Title>
          </div>
          <Text>
            Through the power of the group, you no longer have to wait to <br />{" "}
            gather a small fortune in order to invest in real estate. Our <br />{" "}
            fractional ownership platform allows you to pool with others <br />{" "}
            in order to buy a small bit of a big property.
          </Text>
          <Button
            variant="outline"
            className="text-[#3F51F4] bg-transparent border-[#3F51F4] rounded-full hover:bg-blue-100 hover:duration-200 duration-200 w-fit"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
