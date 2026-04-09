# Nova clean

CI/CD

1 - Link the Github repo to Hostinger with **SSH Key**

- On Github create a private repository (if exists, ensure that is a private repo)
- On Hostinger generate private SSH Key for Git from your domain
- Copy the SSH key generated from Hostinger and add it to the Github repo (Settings > Deploy keys > add SHH key)
- ON Hostinger the repo link (<git@github.com>/user:repo.git) and the branch name, let directory field empty and click on 'create'

2 - Automate the deployement with **Webhooks**
