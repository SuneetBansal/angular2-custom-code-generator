import { Rule, SchematicContext, Tree, apply, mergeWith, template, url, SchematicsException, move } from '@angular-devkit/schematics';
import {  strings } from '@angular-devkit/core';
import { buildDefaultPath } from '@schematics/angular/utility/project';
import { parseName } from '@schematics/angular/utility/parse-name';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function reducer(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read('angular.json');
    if (!workspaceConfigBuffer) {
      throw new SchematicsException('Not as Angular CLI workspace');
    }

    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];

    const defaultProjectPath = buildDefaultPath(project);

    const parsePath = parseName(defaultProjectPath, _options.name);
    const { name, path } = parsePath;

    const sourceTemplate = url('./files');
    const sourceParam  = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
        name
      }),
      move(path)
    ]);

    return mergeWith(sourceParam)(tree, _context);
  };
}
