<template>
  <div class="request-preview">
    <div class="profile-image-container-thumb">
      <img :src="user.url.profileImg" alt />
       <a class="username">{{user.username}}</a> 

    </div>
    <div>
        <button class="confirm" @click="confirmFriendship">Confirm</button>
        <button class="delete">Delete</button>
    </div>
  </div>
</template>


<script>
export default {
    props: ['user'],
    methods: {
        confirmFriendship() {
            this.user.friendship.isApproved = true
            this.$store.dispatch({type: 'saveFriendship', friendship:  this.user.friendship})
        }
    }
};
</script>


<style scoped>
.request-preview {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  font-size: 13px;
  color: rgb(29, 33, 41);
  border-bottom: 1px solid #e0e0e0;
  justify-content: space-between;
}

.profile-image-container-thumb img {
    margin-right: 10px;
}
.profile-image-container-thumb {
    display: flex;
    align-items: center;
}

button.confirm{ 
    margin-right: 5px;
}
</style>



