const { execSync } = require('child_process')

function run(command) {
  console.log(`> ${command}`)
  execSync(command, { stdio: 'inherit' })
}

try {
  console.log('Running build...')
  run('npm run build')

  const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim()
  if (!status) {
    console.log('No changes detected. Nothing to commit or push.')
    process.exit(0)
  }

  console.log('Staging changes...')
  run('git add .')

  console.log('Creating commit...')
  run('git commit -m "auto update"')

  const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim()
  console.log(`Pushing to origin/${branch}...`)
  run(`git push origin ${branch}`)

  console.log('Auto deploy complete.')
} catch (error) {
  console.error('Auto deploy failed.')
  process.exit(1)
}
