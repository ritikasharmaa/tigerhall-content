import { VStack, Text } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
// import ContentCard from "../card/ContentCard";
import SearchBar from "../search/SearchBar";
import { DARK_TEAL, WHITE } from "../../helpers/colors";
// import ContentCardSkeleton from "../../components/card/ContentCardSkeleton";
import useTigerHall from "../../hooks/useTigerHall";

const ContentCard = lazy(() => import("../card/ContentCard"));
const ContentCardSkeleton = lazy(() => import("../card/ContentCardSkeleton"));

const TigerHall = () => {
  const { isLoading, setIsLoading, filteredCards, setSearchvalue } =
    useTigerHall();

  return (
    <>
      <main>
        <VStack
          backgroundColor={DARK_TEAL}
          minH="100vh"
          padding="15px 60px"
          w="100%"
        >
          <VStack alignItems="flex-start" spacing="4px" mb="14px" w="276px">
            <Text color={WHITE} fontSize="14px" fontWeight="700" margin="0px">
              Search
            </Text>
            <SearchBar
              setIsLoading={setIsLoading}
              onChange={(value) => {
                setSearchvalue(value);
                setIsLoading(false);
              }}
            />
          </VStack>
          <VStack spacing="10px">
            <Suspense fallback={<div>loading...</div>}>
              {!isLoading &&
                (filteredCards || []).map((data, index) => {
                  return <ContentCard key={index} cardData={data} />;
                })}
            </Suspense>
           <Suspense fallback={<div>Loading...</div>}>
           {isLoading &&
              Array(10)
                .fill("dummy")
                .map((_, index) => <ContentCardSkeleton key={index} />)}
           </Suspense>
          </VStack>
        </VStack>
      </main>
    </>
  );
};

export default TigerHall;
