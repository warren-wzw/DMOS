# DMOS

## A Dual-Modal Visible and Near-Infrared Imaging System for Ocular Surface Analysis

DMOS brings together portable visible and near-infrared imaging, a paired ocular surface dataset, and anatomy-aware multimodal segmentation for quantitative eyelid and meibomian gland analysis.

**Zhiwei Wang†, Meilu Zhu†, Yuxing Li*, Allie Lee, Edmund Y. Lam***  
† Equal contribution. * Corresponding authors as marked in the manuscript.

The University of Hong Kong · Zhejiang University of Technology

[Project page source](docs/index.html) · [Paper (PDF)](docs/DMOS.pdf)

![DMOS imaging system and segmentation architecture](docs/assets/dmos-system.png)

## Overview

- **Dual-modal acquisition:** a shared optical path with visible and 850 nm near-infrared illumination; approximately 150 ms between modalities.
- **Asymmetric fusion:** RGB-dominant eyelid features and NIR-dominant gland features interact through task-aware residual modulation.
- **Anatomy-guided segmentation:** eyelid ROI refinement, high-resolution gland injection, and Gland-Gap Convolution preserve fine gland structures and separation.
- **Quantitative analysis:** the MG ratio is the segmented gland area divided by the segmented eyelid area.

## DMOS dataset

Dual-Modal Ocular Surface (DMOS) contains **510 paired RGB–NIR images from 110 ocular samples**, with pixel-level eyelid and meibomian gland annotations. The manuscript uses a subject-wise 8:2 training/test split.

Dataset download and model code are not included in this repository. Release links will be added when available.

## Results

Reported results from the supplied manuscript (mean ± standard deviation, %):

| Dataset | Eyelid Dice | MG Dice | clDice | detF1 |
| --- | --- | --- | --- | --- |
| DMOS | 94.567 ± 0.050 | 77.650 ± 0.098 | 85.277 ± 0.108 | 56.573 ± 1.133 |
| MGD1K | 97.430 ± 0.053 | 83.150 ± 0.040 | 91.540 ± 0.066 | 41.273 ± 0.070 |

![Qualitative segmentation comparison on DMOS](docs/assets/dmos-results.png)

The model has 8.78M parameters and 59.72 GFLOPs at 448 × 896 input resolution. The manuscript reports 14.06 ms inference time in its GPU evaluation setup; this is not an on-device timing claim.

## Citation

Publication venue, year, and DOI are not confirmed in the supplied manuscript. This provisional entry avoids assuming publication status:

```bibtex
@unpublished{wang_dmos,
  title = {A Dual-Modal Visible and Near-Infrared Imaging System for Ocular Surface Analysis},
  author = {Wang, Zhiwei and Zhu, Meilu and Li, Yuxing and Lee, Allie and Lam, Edmund Y.},
  note = {Manuscript}
}
```

