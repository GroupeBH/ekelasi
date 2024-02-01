import axios from 'axios'

const cloudinary = (data) => {
  return axios({
    method: 'post',
    url: 'https://api.cloudinary.com/v1_1/dwxnmwhdl/image/upload',
    data,
  })
}

export { cloudinary }
