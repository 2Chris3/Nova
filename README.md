# Nova clean

CI/CD

1 - Link the Github repo to Hostinger with *SSH Key*

- On Github, create a private repository **(Github > new > private repository)**
- On VSCode, create a git project and push to Github **(git remote add, git push)**
- On Hostinger, generate private SSH Key from your domain and copy it **(Websites > domain > Advanced > Git)**
- On Github, paste the SSH Key and put HOSTINGER_SSH_KEY as name **(Settings > Deploy keys > add SHH key)**
- On Hostinger, add **(<git@github.com/user:repo.git>)**, the prod branch name (often 'main'), let directory field empty and click on 'Create' **(Websites > domain > Advanced > Git > Create)**

2 - Automate the deployement with *FTP*

- On Hostinger, copy the Webhook url **(Websites > domain > Advanced > Git > Auto-deploy)**
- On Github, paste the it in Payload URL. Content type = json and let secret empty **(Github > Settings > Webhooks > Add webhook)**
- On Github, click on the webhook and check the redeliveries
