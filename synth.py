import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICGenerator()
common_templates = gcp.CommonTemplates()

# tasks has two product names, and a poorly named artman yaml
for version in ['v1', 'v1beta2']:
    library = gapic.node_library('language', version)

    # skip index, protos, package.json, and README.md
    s.copy(library, excludes=['package.json', 'README.md', 'src/index.js'])

templates = common_templates.node_library(
    package_name="@google-cloud/language",
    repo_name="googleapis/nodejs-language")
s.copy(templates)

# Node.js specific cleanup
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'prettier'])
subprocess.run(['npm', 'run', 'lint'])
