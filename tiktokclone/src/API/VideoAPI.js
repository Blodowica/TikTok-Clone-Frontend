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

    var response = await axios.post(`${BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error;
  }
};
