<template>
    <div>
        <el-form-item>
            <el-button type="danger" @click="forbid">禁用</el-button>
        </el-form-item>
    </div>
</template>

<script>
export default {
    data() {
		return {
			
    	};
  	},
    methods: {
		async forbid() {
			const modelData = JSON.parse(JSON.stringify(this.topupInfo));
			this.$axios.post("/model/add", modelData, {
				headers: {
				'Content-Type': 'application/json'
			}})
			.then((res) => {
				if (res.data.code === 0) {
					this.$message({
						type: 'success',
						message: '充值成功'
					});
					this.topupDialogVisible = false;
					this.clear();
					this.$emit('reload');
				} else {
					this.$message.error('充值失败');
				}
			})
			.catch((error) => {
				console.error('充值出错:', error);
				this.$message.error('充值出错，请重试');
			});
		}
	}
}
</script>

<style scoped>
.dialog-footer {
    text-align: center;
}
</style>
