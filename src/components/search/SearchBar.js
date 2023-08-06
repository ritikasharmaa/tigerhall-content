import React, { useCallback } from "react";
import { Box, Input } from "@chakra-ui/react";
import { GREY, TIGERHALL_TEAL } from "../../helpers/colors";
import {debounce} from '../../helpers/common-methods';

const SearchBar = (props) => {
  const {onChange,setIsLoading} = props;

  const searchChange =useCallback(debounce((value) => {
    onChange(value);
  },300),[onChange])

  return (
    <>
      <Box width="100%">
        <Input
          placeholder="Type any keyword"
          backgroundColor={TIGERHALL_TEAL}
          w="100%"
          p="0px 8px"
          h="29px"
          onChange={e => {
            setIsLoading(true);
            searchChange(e.target.value);
          }}
          fontSize="14px"
          color={GREY}
          border="0px solid"
          borderRadius="5px"
        />
      </Box>
    </>
  );
};

export default React.memo(SearchBar);
