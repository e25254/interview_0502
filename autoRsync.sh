npm run build
rsync -avzh --progress ~/code/personal/interview_0502/.next Interview_0502:~/code/interview_0502/

ssh Interview_0502 "source ~/.zshrc && pm2 kill && cd ~/code/interview_0502 && pm2 start npm --name 'interview_0502' -- run start"
echo 'sync completed'