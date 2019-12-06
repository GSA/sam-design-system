import {BuildPackage} from 'material2-build-tools';

export const componentsPackage = new BuildPackage('components');

// The components package re-exports its secondary entry-points at the root so that all of the
// components can still be imported through `@gsa-sam/components`.
componentsPackage.exportsSecondaryEntryPointsAtRoot = true;

/** List of all build packages defined for this project. */
export const allBuildPackages = [
  componentsPackage,
];
