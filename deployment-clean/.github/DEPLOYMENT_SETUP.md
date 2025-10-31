# Automatic Deployment Setup

This repository is configured for automatic deployment to Surfer Static Server using GitHub Actions.

## 🔧 Setup Instructions

### 1. Configure GitHub Secrets

Go to your repository settings → Secrets and Variables → Actions, and add these secrets:

#### Required Secrets:
- `SURFER_URL` - Your Surfer server URL (e.g., `https://surfer.yourdomain.com`)
- `SURFER_TOKEN` - Your Surfer authentication token
- `SURFER_DOMAIN` - The domain where your site will be deployed (e.g., `bigbrainbusiness.de`)

#### Optional SSH Secrets (if using SSH deployment):
- `SSH_PRIVATE_KEY` - Your SSH private key for server access
- `SSH_HOST` - Your server hostname/IP
- `SSH_USER` - SSH username
- `DEPLOY_PATH` - Path on server where files should be deployed

### 2. Available Deployment Methods

Three deployment workflows are provided:

#### Method 1: Surfer CLI (Recommended)
- **File**: `.github/workflows/deploy.yml`
- Uses official Surfer CLI tool
- Most reliable and feature-complete

#### Method 2: HTTP API
- **File**: `.github/workflows/deploy-http.yml`
- Uses HTTP requests to deploy
- Good fallback if CLI isn't available

#### Method 3: SSH/rsync (Backup)
- **File**: `.github/workflows/deploy-ssh.yml.disabled`
- Direct file transfer via SSH
- Rename to `.yml` to enable
- Requires SSH access to your server

### 3. How It Works

1. **Trigger**: Automatic deployment on push to `master`/`main` branch
2. **Process**:
   - Code is checked out
   - Files are prepared and cleaned
   - Site is deployed to your Surfer server
   - Verification checks are performed
3. **Notification**: Deployment status is shown in GitHub Actions tab

### 4. Manual Deployment

You can also trigger deployments manually:
1. Go to Actions tab in your GitHub repository
2. Select the deployment workflow
3. Click "Run workflow"

### 5. Monitoring

- Check deployment status in the Actions tab
- View detailed logs for troubleshooting
- Verify your site at the configured domain

## 🛠 Customization

### Excluding Files
Edit the `rsync` exclude patterns in the workflow files to customize which files are deployed:

```yaml
--exclude='.git' \
--exclude='.github' \
--exclude='node_modules' \
--exclude='.DS_Store'
```

### Build Process
If you add a build process later:
1. Add a `package.json` with build scripts
2. The workflow will automatically detect and run the build

### Custom Domains
Update the `SURFER_DOMAIN` secret to change your deployment domain.

## 🔍 Troubleshooting

### Common Issues:

1. **Authentication Failed**
   - Verify `SURFER_TOKEN` is correct
   - Check token permissions

2. **Domain Not Found**
   - Verify `SURFER_DOMAIN` matches your Surfer setup
   - Ensure domain is properly configured

3. **Build Failures**
   - Check the Actions logs for detailed error messages
   - Verify all required secrets are set

### Getting Help:
- Check Surfer documentation for server-specific setup
- Review GitHub Actions logs for detailed error information
- Ensure your Surfer server API is accessible from GitHub's runners

## 📝 Next Steps

1. Add the required secrets to your GitHub repository
2. Push your changes to trigger the first deployment
3. Monitor the deployment in the Actions tab
4. Visit your domain to verify the site is live

Your site will now automatically deploy whenever you push changes to the master branch! 🚀