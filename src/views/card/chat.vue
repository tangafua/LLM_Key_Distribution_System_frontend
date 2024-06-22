<template>
    <div>
        <el-form-item>
            <el-button type="primary" @click="openChat">聊天</el-button>
        </el-form-item>
        <el-dialog v-model="chatDialogVisible" title="对话框" :style="{overflowY: 'auto'}">
            <el-form class="chatInfo">
                <el-form-item label="可用模型">
                    <el-select v-model="model_name" placeholder="请选择模型">
                        <el-option label="llama-3-chat" value="0"></el-option>
                        <el-option label="gpt-3.5-turbo" value="1"></el-option>
                        <el-option label="gpt-4-turbo" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="输入消息">
                    <el-input v-model="userMessage" type="textarea" placeholder="请输入消息"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="sendMessage">发送</el-button>
                    <el-button @click="clearMessages">清空</el-button>
                    <el-button type="danger" @click="exitChat">退出</el-button>
                </el-form-item>
            </el-form>
            <el-card v-if="chatHistory.length" class="chat-history">
                <div v-for="(message, index) in chatHistory" :key="index" class="chat-message">
                    <p>{{ message.sender }}: {{ message.text }}</p>
                </div>
            </el-card>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chatDialogVisible: false,
            model_name: null,
            userMessage: '',
            chatHistory: [],
            tokenPrice: 0.01, // 假设每个 token 的价格是 0.01 元
            tokensPerMessage: 10 // 假设每条消息使用 10 个 token
        };
    },
    methods: {
        openChat() {
            this.chatDialogVisible = true;
        },
        sendMessage() {
            if (this.userMessage.trim()) {
                this.addMessage('用户', this.userMessage);
                this.getReply(this.userMessage);
                this.userMessage = '';
            }
        },
        clearMessages() {
            this.chatHistory = [];
        },
        exitChat() {
            const totalTokens = this.chatHistory.length * this.tokensPerMessage;
            const totalCost = totalTokens * this.tokenPrice;
            this.$confirm(`本次使用的总金额为 ${totalCost.toFixed(2)} 元，总 token 数量为 ${totalTokens}。`, '退出确认', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.chatDialogVisible = false;
                this.clearMessages();
            }).catch(() => {
                // 用户取消退出
            });
        },
        addMessage(sender, text) {
            this.chatHistory.push({ sender, text });
        },
        getReply(userMessage) {
            // 模拟回复，这里可以根据你的需要替换成实际的API调用
            setTimeout(() => {
                const reply = `这是对 "${userMessage}" 的回复`;
                this.addMessage('系统', reply);
            }, 1000); // 模拟延迟
        }
    }
}
</script>

<style scoped>
.chat-history {
    margin-top: 20px;
    max-height: 300px; /* 限制聊天记录的高度，确保滚动条可见 */
    overflow-y: auto; /* 仅聊天记录部分滚动 */
}
.chat-message {
    margin-bottom: 10px;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 5px;
}
</style>
