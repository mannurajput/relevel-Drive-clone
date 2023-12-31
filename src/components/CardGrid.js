import React from "react";
import { useState } from "react";
import { Grid, Card, Image } from "semantic-ui-react";

function CardGrid() {
  const [cards, setCards] = useState([
    {
      _id: "5fe7a6474075060017af3a3b",
      length: 8752,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:08:23.788Z",
      filename: "download (6).jpeg",
      md5: "301ea0894c6ef5b45cadf469bac5863c",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: true,
        thumbnailID: "5fe7a6474075060017af3a3d",
        isVideo: false,
        size: "8748",
        IV: "bHmk17yOvkK0sv6OVwXitw==",
      },
    },
    {
      _id: "5fe7a62d4075060017af3a25",
      length: 4992032,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:08:00.630Z",
      filename: "macOS-Big-Sur-Vector-Wave-Wallpaper-iDownloadBlog.jpg",
      md5: "f10a0b58db38c9714f033c4418f95967",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: true,
        thumbnailID: "5fe7a6314075060017af3a3a",
        isVideo: false,
        size: "4992028",
        IV: "R3T+jKvwAnBIMnlT81nmVQ==",
      },
    },
    {
      _id: "5fe7a6254075060017af3a0e",
      length: 5510880,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:07:53.562Z",
      filename: "video (1).mp4",
      md5: "2cfaec970e6400d43c1775b382ef0f9b",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: true,
        size: "5510872",
        IV: "3CSN7tMj4uFJfF7CHQTUBw==",
      },
    },
    {
      _id: "5fe7a6004075060017af3a0b",
      length: 4256,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:07:12.246Z",
      filename: "generic.kk",
      md5: "6dc0722489fdcf9c4404ef87798e7cb9",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: false,
        size: "4243",
        IV: "1LilvYSj6N7mD46mKPe0PA==",
      },
    },
    {
      _id: "5fe7a6004075060017af3a0a",
      length: 19840,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:07:12.214Z",
      filename: "elements.ff",
      md5: "9ee654a764d9d80b7ada17826b9566f3",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: false,
        size: "19831",
        IV: "xPmX2ikpqL8RONLXncAfRA==",
      },
    },
    {
      _id: "5fe7a5d74075060017af3a08",
      length: 16,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:06:31.062Z",
      filename: "newname.cc",
      md5: "fa7c9ae26fe7e6f465227174ccfc1d4f",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: false,
        size: "12",
        IV: "sMTbuaKb5CBCgWPwricbHg==",
      },
    },
    {
      _id: "5fe7a59b4075060017af3a06",
      length: 208,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:05:31.754Z",
      filename: "docker-compose-no-mongo(2).ab",
      md5: "2ccb83564da6a09aeb0fd2d27d5b4372",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: false,
        size: "202",
        IV: "cqAP2ELs95pPABXcZQQWEw==",
      },
    },
    {
      _id: "5fe7a59b4075060017af3a03",
      length: 6448,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:05:31.653Z",
      filename: "main.html",
      md5: "22aac83abb8f95b9489a908c420e2575",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: false,
        size: "6446",
        IV: "kyB5Wwzokb7jjf0SRaaAEQ==",
      },
    },
    {
      _id: "5fe7a59b4075060017af3a02",
      length: 8704,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:05:31.651Z",
      filename: "serdver.exe",
      md5: "670f52a2183894208ba9d9d924acb8d4",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "/",
        parentList: "/",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: false,
        size: "8693",
        IV: "cN/9bcWhTrwJ7/+uHI8PyQ==",
      },
    },
    {
      _id: "5fe7a6a04075060017af3a41",
      length: 26704,
      chunkSize: 261120,
      uploadDate: "2020-12-26T21:09:52.067Z",
      filename: "free-v4-shims.min.css",
      md5: "c77b04730dfc89cc19c7c11df1890ff5",
      metadata: {
        owner: "5fe7a5194075060017af39e3",
        parent: "5fe7a6544075060017af3a3e",
        parentList: "/,5fe7a6544075060017af3a3e",
        hasThumbnail: false,
        thumbnailID: "",
        isVideo: false,
        size: "26701",
        IV: "+Uuz2VlGmnHxsbB0KfW+kw==",
      },
    },
  ]);

  return (
    <Grid columns={3}>
      {cards.map((card) => (
        <Grid.Column key={card._id}>
          <Card>
            <Image
              src={
                "/images/macOS-Big-Sur-Vector-Wave-Wallpaper-iDownloadBlog.jpg"
              }
              style={{ width: "250px", height: "120px" }}
            />
            <Card.Content>
              <Card.Header>{card.filename}</Card.Header>
              <Card.Description>{card.md5}</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default CardGrid;
