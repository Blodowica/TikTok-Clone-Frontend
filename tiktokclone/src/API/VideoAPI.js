import axios from "axios";

//Video CRUD
const BASE_URL = "https://localhost:32768/api/Video";

export const handleGetImageById = (publicVideoId, userID) => {
  let formData = new FormData();
  formData.append("publicVideo", publicVideoId);
  axios({
    url: `${BASE_URL}/GetvideoById?publicVideoId=${publicVideoId}`,
    method: "GET",
  })
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .catch((error) => console.log(error));
};

export const handleUploadVideo = async (
  video,
  caption,
  isCommentsDisabled,
  audience,
  authorId
) => {
  try {
    console.log(video, caption, isCommentsDisabled, audience, authorId);
    const formData = new FormData();
    formData.append("file", video);
    formData.append("caption", caption);
    formData.append("isCommentsDisabled", isCommentsDisabled);
    formData.append("audience", audience);
    formData.append("authorId", authorId);

    var response = await axios.post(
      `https://localhost:32768/api/Video/upload

    `,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error;
  }
};

// export const getAllVideos = async () => {
//   try {
//     const response = await axios.get(
//       `https://localhost:32768/api/Video/GetAllVideos

// `
//     );
//     return response.data; // Return the actual data from the response
//   } catch (error) {
//     console.error("Error fetching videos:", error);
//     throw error; // Re-throw the error for higher-level handling
//   }
// };
export const getAllVideos = async () => {
  try {
    const response = await axios.get(
      `https://localhost:32768/api/Video/GetAllVideos`
    );
    if (response.data.length === 0) {
      // If response is empty, add dummy data
      return dummyData;
    } else {
      // Return the actual data from the response if it's not empty
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
    // If there's a network error, return dummy data
    return dummyData;
  }
};

export const getVideoById = async (videoId) => {
  try {
    console.log("hit endpoitn");
    const response = await axios.get(
      `https://localhost:32768/api/Video/GetvideoById?publicVideoId=jcyb8u8x1bwpaoybkitf`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};

export const getVideoCommnets = async (videoId) => {
  const respone =
    await axios.get(`https://localhost:32768/api/Comment/GetAllVideoComments?videoId=${videoId}
  `);

  return respone.data;
};

export const postComment = async (
  author,
  content,
  created,
  videoId,
  UserId
) => {
  const formData = new FormData();
  formData.append("author", author);
  formData.append("content", content);
  formData.append("Created", created);
  formData.append("videoId", videoId);
  formData.append("userId", UserId);

  try {
    axios.post(
      `https://localhost:32768/api/Comment/SendVideoComment`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    alert("Something went wront posting the comment, please try again later!");
    console.log(error);
    throw error;
  }
};

const dummyData = [
  {
    id: 2,
    authorId: 4,
    caption: "Very cool kendrick video",
    videoURL:
      "https://res.cloudinary.com/dlivi0v24/video/upload/v1713876389/dxjcwquf6ci2eyasjm1c.mp4",
    likes: 0,
    cloudinaryVideoId: "dxjcwquf6ci2eyasjm1c",
    audience: "2",
    isCommentsDisabled: false,
    createdAt: "2024-04-23T12:46:31.858746",
    updatedAt: "2024-04-23T12:46:31.8587609",
    comments: null,
  },
  {
    id: 1,
    authorId: 12,
    caption: "Very funn gym video squating",
    videoURL:
      "https://res.cloudinary.com/dlivi0v24/video/upload/v1713382609/jcyb8u8x1bwpaoybkitf.mp4",
    likes: 0,
    cloudinaryVideoId: "jcyb8u8x1bwpaoybkitf",
    audience: "Everyone",
    isCommentsDisabled: false,
    createdAt: "2024-04-17T19:36:49.7631",
    updatedAt: "2024-04-17T19:36:49.7631157",
    comments: null,
  },
];
