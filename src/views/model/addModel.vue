<template>
    <div>
		<el-form-item>
            <el-button type="primary" @click="openAdd">添加</el-button>
        </el-form-item>
        <el-dialog v-model="addDialogVisible" title="增加模型">
			<el-form :model="newModel">
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="模型编号">
							<el-input v-model="newModel.id" style="width: 100%;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="模型名称">
							<el-input v-model="newModel.name" style="width: 100%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="模型状态">
							<el-select v-model="newModel.state" placeholder="请选择状态">
								<el-option label="启用" value="1"></el-option>
								<el-option label="禁用" value="0"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="模型价格">
							<el-input v-model="newModel.price" style="width: 100%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="模型描述">
					<el-input v-model="newModel.description" style="width: 100%;"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="clear">清空</el-button>
				<el-button type="primary" @click="addModel">保存</el-button>
			</div>
    	</el-dialog>
    </div>
</template>

<script>
export default {
    data() {
		return {
			addDialogVisible: false,
			newModel: {
				id: '',
				name: '',
				state: null,
				price: '',
				description: ''
			}
    	};
  	},
    methods: {
		openAdd() {
			this.addDialogVisible = true;
		},
		clear() {
			this.newModel = {
				id: '',
				name: '',
				state: null,
				price: '',
				description: ''
			};
		},
		async addModel() {
			const modelData = JSON.parse(JSON.stringify(this.newModel));
			this.$test.post("/model/add", modelData, {
				headers: {
				'Content-Type': 'application/json'
			}})
			.then((res) => {
				if (res.data.code === 0) {
					this.$message({
						type: 'success',
						message: '添加成功'
					});
					this.addDialogVisible = false;
					this.clear();
				} else {
					this.$message.error('添加失败');
				}
			})
			.catch((error) => {
				console.error('添加出错:', error);
				this.$message.error('添加出错，请重试');
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