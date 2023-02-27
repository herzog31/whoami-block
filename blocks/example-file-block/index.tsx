import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { Fragment, useEffect, useState } from "react";
import "./index.css";

export default function (props: FileBlockProps) {
  const [data, setData] = useState(null);

  console.log('props', props);
  const { files, context } = props;

  // Read data.js
  const dataFile = files.find((file: { path: string; }) => file.path === "data.js");

  useEffect(() => {
    (async () => {
      const dataDownloaded = await fetch(dataFile.url);

      // Parse JSON
      const dataContent = await dataDownloaded.json();

      // Base 64 decode dataContent.content
      const dataContentDecoded = atob(dataContent.content);

      setData(dataContentDecoded);
    })();
  });


  // Intro section

  // Video section

  // Blog post section

  console.log("dataContent", data);

  return (
    <Fragment>
      Hello World!
      {/* <Box p={4}>
        <Box
          borderColor="border.default"
          borderWidth={1}
          borderStyle="solid"
          borderRadius={6}
          overflow="hidden"
        >
          <Box
            bg="canvas.subtle"
            p={3}
            borderBottomWidth={1}
            borderBottomStyle="solid"
            borderColor="border.default"
          >
            File: {context.path} {language}
          </Box>
          <Box p={4}>
            <p>Metadata example: this button has been clicked:</p>
            <Button
              onClick={() =>
                onUpdateMetadata({ number: (metadata.number || 0) + 1 })
              }
            >
              {metadata.number || 0} times
            </Button>
            <pre className="mt-3 p-3">{content}</pre>
          </Box>
        </Box>
      </Box> */}
    </Fragment>
  );
}