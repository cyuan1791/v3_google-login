<script setup>
import { jwtDecode } from 'jwt-decode'; // Named import
const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
  const decodedToken = jwtDecode(response.credential);
  console.log(decodedToken);
  // Access user data from the decoded token payload
  const email = decodedToken.email;
  const name = decodedToken.name;
}
</script>

<template>
  <GoogleLogin :callback="callback" />
</template>