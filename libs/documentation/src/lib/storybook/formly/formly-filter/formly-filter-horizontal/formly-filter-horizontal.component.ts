import { Component, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SDSAutocompletelConfiguration, SDSAutocompleteServiceInterface, SDSHiercarchicalServiceResult, SelectionMode } from '@gsa-sam/components';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'sds-formly-filter-horizontal',
  templateUrl: './formly-filter-horizontal.component.html',
  providers: []
})
export class FormlyFilterHorizontalComponent {
  form = new FormGroup({});
  model: any = {};
  updatedModel : any = {};
  options: FormlyFormOptions = {};
  autcompleteSettings = new SDSAutocompletelConfiguration();
  fields: FormlyFieldConfig[] = [
    {
      key: 'status',
      type: 'multicheckbox',
      props: {
        label: 'Status',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'all',
            label: 'All',
          },
        ],
      },
    },
    {
      key: 'socioeconomic2',
      type: 'multicheckbox',
      props: {
        label: 'Socio-Economic Status',
        options: [
          {
            value: 'vet',
            label: 'Veteran Owned',
          },
          {
            value: 'women',
            label: 'Women Owned',
          },
          {
            value: 'minority',
            label: 'Minority Owned',
          },
        ],
      },
    },

    {
      key: 'searchCtcode',
      props: {
        label: 'CT Code',
      },
      fieldGroup: [
        {
          key: 'ctcode',
          type: 'autocomplete',
          props: {
            group: 'popover',
            label: 'CT Code',
            service: this.service,
            configuration: this.autcompleteSettings,
            model: this.model.searchCtcode,
            default: ''
            // modelChange: this.changes,
          },
        }
      ],
    }
    // ,
    // {
    //   key: 'socioeconomic4',
    //   type: 'multicheckbox',
    //   props: {
    //     label: 'Socio-Economic Status 4',
    //     options: [
    //       {
    //         value: 'vet',
    //         label: 'Veteran Owned',
    //       },
    //       {
    //         value: 'women',
    //         label: 'Women Owned',
    //       },
    //       {
    //         value: 'minority',
    //         label: 'Minority Owned',
    //       },
    //     ],
    //   },
    // },
    // {
    //   key: 'dateRange',
    //   props: {
    //     label: 'Date Range',
    //     autoClose: 'false',
    //   },
    //   fieldGroup: [
    //     {
    //       key: 'dateRangeSelect',
    //       type: 'select',
    //       className: 'display-block',
    //       props: {
    //         label: 'Select Date',
    //         options: [
    //           { label: 'Anytime', value: 'anytime' },
    //           { label: 'Past day', value: 'pastDay' },
    //           { label: 'Past Week', value: 'pastWeek' },
    //           { label: 'Custom Dates', value: 'customDate' },
    //         ],
    //         hideOptional: true,
    //       },
    //     },
    //     {
    //       key: 'createdDate',
    //       type: 'datepicker',
    //       className: 'display-block',
    //       props: {
    //         label: 'Created Date',
    //         minDate: new Date(2019, 9, 5),
    //         maxDate: new Date(2020, 11, 15),
    //         placeholder:
    //           'eg: ' +
    //           new Date().toLocaleString('en-US', {
    //             month: 'short',
    //             day: 'numeric',
    //             year: 'numeric',
    //           }),
    //         hideOptional: true,
    //       },
    //       hideExpression: (model) => {
    //         return !model || !model['dateRangeSelect'] || model['dateRangeSelect'] != 'customDate';
    //       },
    //     },
    //     {
    //       key: 'expirationDate',
    //       type: 'datepicker',
    //       className: 'display-block',
    //       props: {
    //         label: 'Expires Date',
    //         minDate: new Date(2019, 9, 5),
    //         maxDate: new Date(2020, 11, 15),
    //         placeholder:
    //           'eg: ' +
    //           new Date().toLocaleString('en-US', {
    //             month: 'short',
    //             day: 'numeric',
    //             year: 'numeric',
    //           }),
    //         hideOptional: true,
    //       },
    //       hideExpression: (model) => {
    //         return !model || !model['dateRangeSelect'] || model['dateRangeSelect'] != 'customDate';
    //       },
    //     },
    //   ],
    // },
    // {
    //   key: 'expirationDateRangeEx',
    //   type: 'daterangepickerv2',
    //   hide: true,
    //   props: {
    //     label: 'Expiration Date Range',
    //     minDate: new Date(2019, 9, 5),
    //     maxDate: new Date(2020, 11, 15),
    //     placeholder:
    //       'eg: ' +
    //       new Date().toLocaleString('en-US', {
    //         month: 'short',
    //         day: 'numeric',
    //         year: 'numeric',
    //       }),
    //     hideOptional: true,
    //   },
    // },
    // {
    //   key: 'entity',
    //   type: 'input',
    //   hide: true,
    //   props: {
    //     label: 'Entity Name',
    //     placeholder: 'eg: Acme Corporation',
    //     description: 'Enter the name of your entity.',
    //     required: true,
    //   },
    // },
  ];



  searchModel = {};

  ctCodeResultAll: CTCode[] = [
    {
      "id": 65,
      "code": "P",
      "cause": "Debarment by any Federal agency pursuant to Executive Order 12549 for violations of the Drug-Free Workplace Act of 1988, Pub. L. 100-690.",
      "treatment": "Listed persons are excluded as participants or principals in all primary and lower tier covered transactions of all agencies. Further, agencies and participants shall not renew or otherwise extend the duration of covered transactions or consent to lower tier covered transactions with such persons. Exceptions to this treatment require a written determination by the head of the Federal agency or designee stating the reasons for entering into the transaction. Debarments are for a specified term as determined by the debarring agency and as indicated by the listing.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 36,
      "code": "J1",
      "cause": "Proposed debarment by an agency pursuant to FPMR 101-45.6 and FAR 9.405(a) for one or more of the causes listed in FAR 9.406-2.",
      "treatment": "Same as Code J, except that proposed debarments are temporary actions. Therefore, the termination date is shown as \"Indefinite\" (Indef.) (see Note following Code K).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 14,
      "code": "RR",
      "cause": "Declared ineligible by the Secretary of Education in accordance with the Higher Education Act of 1965 20 U.S.C. 1145g, and the Drug-Free Schools and Communities Act of 1986, 20 U.S.C. 3224a, based upon a failure to submit a certification of adoption and implementation of a drug prevention program.",
      "treatment": "Listed institutions of higher education, local educational agencies and State educational agencies are ineligible to receive funds or any other form of financial assistance under any Federal program. An institution or agency remains ineligible until it submits the drug prevention program certification. Therefore, the termination date will be listed as Indefinite\" (Indef.). Contact the Department of Education point of contact listed if you need specific information concerning listed parties.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 40,
      "code": "A1",
      "cause": "Proposed debarment by an agency pursuant to one or more of the causes listed in FAR 9.406-2 or 39 CFR 601.113. (See Code N1- Proposed debarment pursuant to FAR 9.406-2(b)(2) Drug Free Workplace Act of 1988.)",
      "treatment": "Same as Code A, except that proposed debarments are temporary actions. Therefore the termination date will be listed as \"Indefinite\" (Indef.).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 42,
      "code": "B",
      "cause": "Suspension by an agency pending completion of investigation or legal proceedings pursuant to FAR 9.407-2, GPO Instructions 110.11A or 39 CFR 601.113, and based on (a) an indictment for, or adequate evidence of, the commission of fraud, antitrust violations, embezzlement, theft, forgery, bribery, false statements, or other offenses indicating a lack of business integrity; or (b) adequate evidence of any other cause of a serious and compelling nature. (See Code O-Suspension pursuant to FAR 9.407-2(a)(4) Drug Free Workplace Act of 1988.)",
      "treatment": "Same as Code A, except that suspensions are temporary actions. Therefore, the termination date will be listed as \"Indefinite\" (Indef.). NOTE: Debarment and suspension actions taken in accordance with policies and procedures set forth in the FAR 9.4 are effective throughout the Executive Branch. Debarment and suspension actions taken in accordance with GPO Instructions 110.11A and 39 CFR 601.113 are effective only within GPO or the PS as listed preceding the listed party. These actions are for information purposes only, but should be considered by contracting officials as reflecting acts or circumstances which may have a bearing on the contractor's responsibility, and which may serve as a basis for Governmentwide debarment or suspension of the contractor by another agency.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 43,
      "code": "M",
      "cause": "Sanctioned by the President or (designee) pursuant to Section 2443 of the Multilateral Export Control Enhancement Amendments Act of 1988, and Executive Order 12661.",
      "treatment": "Departments, agencies, and instrumentalities of the U.S. Government are prohibited from contracting with, and procuring products and services from or manufactured by, the listed party. For detailed guidance concerning the scope of, and exception to, this sanction, see FAR 25.10. Debarment is for a three-year period to terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 45,
      "code": "Z1",
      "cause": "Excluded by the Department of Health and Human Services and all other Federal procurement and nonprocurement programs. In addition, for exclusions imposed on or after August 5, 1997, the scope of the exclusions encompasses all Federal health care programs.",
      "treatment": "For exclusions imposed prior to August 5, 1997, the scope is limited to the four health care programs specifically referenced above. For exclusions imposed on or after August 5, 1997, the scope includes all Federal health care programs. The effect of an exclusion is that payment may not be made by the programs for any items or services furnished (except an emergency item or service) by an excluded party. If the party is a physician, payment may not be made for any items or services furnished, ordered, or prescribed. Contact the Health and Human Services liaison shown under the heading \"For Additional Information\" in the front of this issue is you need specific information concerning listed parties.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 47,
      "code": "G",
      "cause": "Declared ineligible by the Secretary of Labor under the authority granted in Reorganization Plan No. 14 of 1950 and based on a violation of one or more of the labor standards provisions of one or more of the following Federal statutes: Contract Work Hours and Safety Standards Act, 40 U.S.C. 327, et seq.; Copeland Act, 40 U.S.C. 276c; Hospital Survey and Construction Act, as amended by the Hospital and Medical Facilities Amendments of 1964, 42 U.S.C. 291e(a)(5); United State Housing Act of 1937, as amended, 42 U.S.C.1437j; National Housing Act, 12 U.S.C. 1715c, as amended: Housing Act of 1949, 42 U.S.C. 1459 Housing Act of 1961, 42 U.S.C. 1500c-3; Housing and Urban Development Act of 1965, 42 U.S.C. 3107; Federal-Aid Highway Act, 23 U.S.C. 113; Federal Water Pollution Control Act, 33 U.S.C. 1372; Postal Reorganization Act, 39 U.S.C. 410(b)(4)(c); Public Works and Economic Development Act of 1965, 42 U.S.C. 3222; Housing and Community Development Act of 1974, 42 U.S.C. 5310; Health Professions Educational Assistance Act, 42 U.S.C. 293a(c)(7), Appalachian Regional Development Act of 1965, 40 U.S.C. App. 402; Urban Mass Transportation Act of 1964, 40 U.S.C. 1609; Housing Act of 1950, 12 U.S.C. 1749a(f); Housing. Act of 1959, 12 U.S.C. 1701q(c)(3) Commercial Fisheries Research and Development Act of 1964, 16 U.S.C. 779e; National Technical Institute for the Deaf Act, 20 U.S.C. 684(b)(5); National Foundation on the Arts and Humanities Act of 1965, 20 U.S.C. 954(j); Elementary and Secondary Education Act of 1965, as amended by Elementary and Secondary and other Educational Amendments of 1969, 20 U.S.C. 1232(b), Indian Self-Determination and Education Assistance Act, 25 U.S.C. 450e; Indian Health Care Improvement Act, 25 U.S.C. 1633(b); Rehabilitation Act of 1973 29 U.S.C. 776(b)(5), Job Training Act, 29 U.S.C. 1501 et seq.; Veterans Nursing Home Care Act of 1964, 38 U.S.C. 5035(a)(8); National Visitors Center Facilities Act of 1966, 4 0 U.S.C. 808; Health Services Research, Health Statistics, and Medical Libraries Act of 1974, 42 U.S.C. 242m(h)(2); Nurse Training Act of 1964, 42 U.S.C. 296a(b)(5); Heart Disease, Cancer, and Stroke Amendments of 1965, 42 U.S.C. 299d(b)(4); Safe Drinking Water Act, 42 U.S.C. 300j-9(e); National Health Planning and Resources Act, 42 U.S.C. 300 0-3(b)(1)(H); Demonstration Cities and Metropolitan Development Act of 1966, 42 U.S.C. 3310: 12 U.S.C. 1715c; 42 U.S.C. 1437(j); Defense Housing and Community Facilities Land Services Act of 1951, 42 U.S.C. 1592j; Special Health Revenue Sharing Act of 1975, 42 U.S.C.2689j(a)(5); Economic Opportunity Act of 1964, 42 U.S.C.2947: Headstart, Economic Opportunity and Community Partnership Act of 1974, 42 U.S.C. 299a; Older Americans Act of 1965. 42 U.S.C. 3041a(a)(4); Juvenile Delinquency Prevention Act, 42 U.S.C. 3884, New Communities Act of 1968, 42 U.S.C. 3909; Urban Growth and New Community Development Act of 1970, 42 U.S.C. 4529; Domestic Volunteers Service Act of 1973, 42 U.S.C. 5046; Developmentally Disabled Assistance and Bill of Rights Act, 42 U.S.C. 6042(4); 42 U.S.C. 6063(b)(19); National Energy Conservation Policy Act, 42 U.S.C. 6371j; Public Works Employment Act of 1976, 42 U.S.C. 6708; 42 U.S.C. 6728; Energy Conservation and Production Act, 42 U.S.C. 6881(h); Solid Waste Disposal Act, 42 U.S.C. 6979; Rail Passenger Service Act of 1970, 45 U.S.C. 565(d), Highway Speed Ground Transportation Study, 49 U.S.C. 1636(b); Airport and Airway Development Act of 1970, 49 U.S.C. 1722(b); Federal Civil Defense Act of 1950, 50 U.S.C. p. 2281i; National Capital Transportation Act of 1965, 40 U.S.C. 682(b)(4); Delaware River Basin Compact (Sec. 15.1, 75 Stat. 714, Pub. L. 87-328); Energy Security Act, 42 U.S.C. 8701 note.",
      "treatment": "The contractor, or any firm, corporation, partnership, or association in which the contractor has a substantial interest is ineligible to receive any contract or subcontract for work subject to the labor standards provisions of any of the listed statutes. Debarment is for a period determined by the Secretary of Labor, not to exceed three years, to terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 50,
      "code": "SS",
      "cause": "Excluded by the Secretary of Education as required by the Higher Education Act of 1965, 20 U.S.C. 1145g, and the Drug-Free Schools and Communities Act of 1986, 20 U.S.C. 3224a, based on a violation of a certification of adoption and implementation of a drug prevention program.",
      "treatment": "Listed institutions of higher education, local educational agencies and State educational agencies are ineligible to receive funds or any other form of financial assistance under any Federal program. An institution or agency must comply with the requirements and procedures for reinstatement of eligibility applicable to any Federal program under which it desires to receive Federal financial assistance. Therefore, the termination date for such denials will be listed as \"Indefinite. (Indef). For further information, please contact the Department of Education point of contact listed under \u0013View Agency Contacts\u0014.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 52,
      "code": "QQ",
      "cause": "Partial denial of Federal benefits by a sentencing judge pursuant to Section 5301 of the Anti-Drug, Abuse Act of 1988 on the basis of a conviction(s) for a Federal or State offense relating to the distribution or possession of controlled substances.",
      "treatment": "Listed persons shall not be issued grants, contracts, loans, and/or professional or commercial licenses as specified by the sentencing judge which are provided by an agency of the United States or by appropriated funds of the United States. Contact the U.S. Department of Justice's Denial of Federal Benefits Project point of contact listed. The denial does not include any retirement, welfare, Social Security, health, disability, veterans benefit, public housing, or other similar benefit, or any other benefit for which payments or services are required for eligibility. Veterans benefits include all benefits provided to veterans, their families, or survivors by virtue of the service of a veteran in the Armed Services of the United States. The denial shall terminate on the date shown. Persons convicted for a third offense relating to distribution of controlled substances after the effective date of the Act shall be denied benefits permanently. Therefore the termination date for such denials shall be listed as \"Permanent\u0014 (Perm ). NOTE A denial of benefits under Section 5301 of the Anti-Drug Abuse Act of 1988 does not include benefits relating to long-term drug treatment programs for addiction for any person who declares himself an addict, provides a reasonable body of evidence to substantiate this declaration, and submits to a long-term treatment program for addiction, or is deemed to be rehabilitated pursuant to rules established by the Secretary of Health and Human Services. The denial of benefits may also be suspended on the basis of the person's participation or good faith effort to participate in a supervised rehabilitation program. For further information, please call the U.S. Department of Justice's Denial of Federal Benefits Project point of contact listed under \u0013View Agency Contacts\u0014 to verify any assertions that the denial of benefits does not apply, or has been waived or suspended on this basis.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 53,
      "code": "A",
      "cause": "Debarment by an agency pursuant to FAR 9.406-2, GPO Instructions 110.11A or 39 CFR 601.113, for one or more of the following causes: (a) conviction of or civil judgment for fraud violation of antitrust laws, embezzlement, theft, forgery, bribery, false statements, or other offenses indicating a lack of business integrity; (b) violation of the terms of a Government contract, such as a willful failure to perform in accordance with its terms or a history of failure to perform; or (c) any other cause of a serious and compelling nature affecting responsibility. (See Code N- Debarment pursuant to FAR 9.406 2(b)(2) Drug Free Workplace Act of 1988.)",
      "treatment": "Contractors are excluded from receiving contracts and from directly or indirectly receiving benefits under Federal nonprocurement programs, and agencies shall not solicit offers from, award contract to renew or otherwise extend the duration of current contracts, or consent to subcontracts with these contractors, unless the acquiring agency's head or a designee determines that there is a compelling reason for such action. Government prime contractors, when required by the terms of their contract, shall not enter into any subcontract equal to or in excess of $30,000 with a contractor that is debarred, suspended, or proposed for debarment, unless there is a compelling reason to do so. Debarments are for a specified term as determined by the debarring agency and as indicated in the listing.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 54,
      "code": "L",
      "cause": "Debarred by the Secretary of Labor for violation of the Walsh-Healey Public Contracts Act, 40 U.S.C. 37.",
      "treatment": "Offers shall not be solicited from, nor contracts be awarded to, the listed contractor or any firm, corporation, partnership or association in which the contractor has a controlling interest. Debarment is for a three-year period to terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 66,
      "code": "Q",
      "cause": "Suspension by any Federal agency pursuant to Executive Order 12549 for violations of the Drug-Free Workplace Act of 1988, Pub. L. 100-690.",
      "treatment": "Same as Code P, except that suspensions are temporary actions. Therefore the termination date will be listed as \"Indefinite (Indef.).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 56,
      "code": "F",
      "cause": "Declared ineligible by the Secretary of Labor or the Assistant Secretary of Labor for Employment Standards in accordance with Executive Order No.11246, as amended (30 FR 12319, September 28, 1965; 32 FR 14303, October 13,1967; 43 FR 46501, October 5, 1978) Section 503 of the Rehabilitation Act of 1973, as amended 29 U.S.C. Sec. 793, and/or the affirmative action provisions of the Vietnam Era Veterans' Readjustment Assistance Act of 1974, as amended, 38 U.S.C. Sec. 4212, and based on the contractor's or subcontractor's failure to satisfy its obligations under the Equal Opportunity Clause or Affirmative Action Clause of a Federal contract or federally assisted construction contract.",
      "treatment": "The contractor or subcontractor and its officers, agents, successors, divisions and subsidiaries are ineligible for the award of any contract or subcontract funded, in whole, or part, with funds from any agency, or for the extension or other modification of existing contracts or subcontracts. Debarment is for an indefinite period of time pending the contractor's or subcontractor's compliance with Executive Order 11246, Section 503 of the Rehabilitation Act of 1973, the affirmative action provisions of the Vietnam Era Veterans' Readjustment Assistance Act of 1974, and their respective implementing regulations. Therefore, the termination date will be listed as \"Indefinite\" (Indef.).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 60,
      "code": "I",
      "cause": "Declared ineligible based on a finding by the Assistant Secretary of Defense (Force Management Policy), under Section 558 of the National Defense Authorization Act for Fiscal Year 1995 (P.L. 103-337), that the institution of higher education has a policy of denying or preventing military recruitment on campus.",
      "treatment": "Listed institutions of higher education are ineligible to receive any Department of Defense (DoD) funding through any contract, grant, or cooperative agreement entered into by any Federal agency. Therefore, Federal agencies shall not: (1) award any contract, grant, or cooperative agreement using DoD funds to such institutions; (2) consent to any subcontract or any subaward of DoD funds to such an institution under any contract, grant or cooperative agreement, if such subcontract or subaward requires the agency's consent; or (3) make any further payment of DoD funds under any existing contracts, grants or cooperative agreements, once an institution has been determined to be ineligible. Contact the Office of the Assistant Secretary of Defense (Force Management Policy) Military Personnel Policy if you need specific information concerning listed parties.",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 62,
      "code": "VV",
      "cause": "Debarred by the Department of State pursuant to Section 38 of the Arms Export Control Act (AECA), 22 U.S.C. 2778, and the International Traffic in Arms Regulations (ITAR), 22 CFR 127.7, for one or more of the following causes: conviction for criminally violating or conspiring to violate Section 38 of the AECA (22 CFR 127.7(a)); or violation of the AECA or ITAR when the violation is of such a character as to provide a reasonable basis to believe that the violator cannot be relied upon to comply with Section 38 of the AECA or ITAR in the future (22 CFR 127.7(b)). ",
      "treatment": "Listed persons are prohibited from participating directly or indirectly in the export or temporary import of defense articles or United States origin related technical data or in the furnishing of defense services for which a Department of State license or approval is required.    ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 64,
      "code": "D",
      "cause": "Debarred by the Secretary of Labor for violation of the Service Contract Act, 41 U.S.C. 354.",
      "treatment": "Offers shall not be solicited from, nor contracts be awarded to, the listed contractor or any firm, corporation, partnership, or association in which the contractor has a substantial interest. Debarment is for a three-year period to terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 76,
      "code": "N1",
      "cause": "Proposed debarment by an agency pursuant to FAR 9.406-2(b)(2) for violations of the Drug-Free Workplace Act of 1988, Pub. L. 100-690.",
      "treatment": "Same as Code N, except that proposed debarments are temporary actions. Therefore, the termination date will be listed as \"Indefinite\" (Indef.).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 67,
      "code": "R",
      "cause": "Debarment by any Federal agency pursuant to Executive Order 12549 and the agency implementing regulations for one or more 153 of the following causes: (a) conviction or a civil judgment for fraud, violation of antitrust laws, embezzlement, theft, forgery, bribery, false statements, false claims, or other offense indicating a lack of business integrity or honesty; (b) violation of the terms of a public agreement or transaction so serious as to affect the integrity of an agency program; or (c) other causes specified in the agency implementing regulations, or such other cause of a serious or compelling nature affecting responsibility.",
      "treatment": "Listed persons are excluded as participants or principals in all primary and lower tier covered transactions of all agencies and may not receive contracts under Federal procurement programs (see Treatment A). Further, agencies and participants shall not renew or otherwise extend the duration of covered transactions or consent to lower tier covered transactions with such persons. Exceptions to this treatment require a written determination by the head of the Federal agency or designee stating the reasons for entering the transaction. Debarments are for a specified term as determined by the debarring agency and as indicated in the listing.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 68,
      "code": "S",
      "cause": "Suspension by any Federal agency pursuant to Executive Order 12549 and the agency implementing regulations based on an indictment or other adequate evidence (a) to suspect the commission of an offense that is a cause for debarment or (b) that other causes for debarment under the agency regulations may exist.",
      "treatment": "Same as Code R, except that suspensions are temporary actions and the period of suspension is indefinite. Therefore, the termination date will be listed as \"Indefinite (Indef.). NOTE Debarments and suspensions taken in accordance with agency regulations issued pursuant to Executive Order 12549, which become effective on October 1, 1988, are effective throughout the Executive Branch.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 69,
      "code": "T",
      "cause": "Acceptance of a voluntary exclusion in accordance with the terms of an agreement with a Federal agency.",
      "treatment": "In accordance with Executive Order 12549 and the agency implementing regulations, these persons are excluded in accordance with the terms of their settlements. Agencies must contact the agency taking the action to ascertain the extent of the exclusion or the limit on the person's participation, in covered transactions.  ",
      "active": true,
      "exclusionType": "Voluntary Exclusion",
      "exclusionTypeId": 4
    },
    {
      "id": 71,
      "code": "V",
      "cause": "Terminated from eligibility by the Secretary of Education under the authority of the Higher Education Act of 1965, as amended; and 34 CFR Part 668, Subpart G; and 34 CFR Part 682, Subpart G.",
      "treatment": "The educational institution or lender is ineligible to participate in Federal student aid programs. This action is only applicable to Department of Education programs authorized under Title IV of the Higher Education Act of 1965, as amended. Ineligibility under a termination is for a period of 18 months, to terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 72,
      "code": "W",
      "cause": "Suspended for the same cause as V, above.",
      "treatment": "Same as V, except that the period of ineligibility is 60 days, which may be extended by agreement or by initiation of other proceedings. Please call the Department of Education point of contact listed under \u0013View Agency Contacts\u0014 to determine if the suspension date has been extended. ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 73,
      "code": "X",
      "cause": "Debarment, suspension, or equivalent exclusion by an agency prior to the October 1, 1988, effective date for the agency's rule implementing Executive Order 12549. These actions will generally be effective only in the Nonprocurement programs of the agency taking the action.",
      "treatment": "Applicable to all Nonprocurement programs of the agency taking the action. When used by other agencies, such listings are for informational purposes only, but should be considered by program officials as reflecting acts, or circumstances, which may have a bearing on the person's responsibility, and which may serve as a basis for debarment or suspension of the person by the agency. For further information, contact the liaison of the agency taking the action ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 74,
      "code": "K",
      "cause": "Suspension by an agency pending completion of investigation or legal proceedings pursuant to Federal Property Management Regulations (FPMR) 101-45.6, and based on (a) an indictment for, or adequate evidence of, the commission of fraud, antitrust violations, embezzlement, theft, forgery, bribery, false statements, or other offenses indicating a lack of business integrity; or (b) adequate evidence of any other cause of a serious and compelling nature.",
      "treatment": "Same as for Code J. Suspensions are temporary actions and the period of suspension is indefinite. Therefore, the termination date will be listed as \"Indefinite\" (Indef.) (see the following Note). NOTE Debarment and suspension actions pursuant to FPMR 101-45.6 are effective only with respect to contracts for the sale of Federal property. Information as to the basis underlying such debarment or suspension action may be obtained from the agency point of contact. Contracting officials may consider this information as reflecting acts or circumstances which may have a bearing on the contractors' responsibility and which may serve as a basis for debarment or suspension from acquisition contracting by another agency.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 75,
      "code": "N",
      "cause": "Debarment by an agency pursuant to FAR 9.406-2(b)(2) for violations of the Drug-Free Workplace Act of 1988, Pub. L. 100-690.",
      "treatment": "Contractors are excluded from receiving contracts and from directly or indirectly receiving benefits under Federal nonprocurement programs, and agencies shall not solicit offers from, award contracts to, renew or otherwise extend the duration of current contracts, or consent to subcontracts with these contractors, unless the acquiring agency's head or a designee determines that there is a compelling reason for such action. Government prime contractors, when required by the terms of their contract, shall not enter into any subcontract equal to or in excess of $30,000 with a contractor that is debarred, suspended, or proposed for debarment, unless there is a compelling reason to do so. Debarments are for a specified term as determined by the debarring agency and as indicated in the listing.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 77,
      "code": "O",
      "cause": "Suspension by an agency pursuant to FAR 9.407-2(a)(4) for violations of the Drug-Free Workplace Act of 1988, Pub. L. 100-690.",
      "treatment": "Same as Code N, except that suspensions are temporary actions. Therefore, the termination date will be listed as \"Indefinite\" (Indef.).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 78,
      "code": "AA",
      "cause": "Denial of all Federal contracts by a sentencing judge pursuant to Section 5301 of the Anti-Drug Abuse Act of 1988 on the basis of a conviction(s) for a Federal or State offense relating to the distribution or possession of controlled substances.",
      "treatment": "Listed persons shall not be issued any contract, grant, load, professional license, or commercial license provided by an agency of the United States or by appropriated funds of the United States. Subcontracts awarded with appropriated Federal funds shall also be denied. The denial shall terminate on the date shown. Persons convicted for a third offense relating to distribution of controlled substances after the effective date of the Act shall be denied benefits permanently. Therefore, the termination date for such denials shall be listed as \"Permanent\" (Perm.)  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 79,
      "code": "BB",
      "cause": "Partial denial of Federal contracts by a sentencing judge pursuant to Section 5301 of the Anti-Drug Abuse Act of 1988 on the basis of a conviction(s) for a Federal or State offense relating to the distribution or possession of controlled substances.",
      "treatment": "Listed persons shall not be issued contracts or subcontracts, grants, loans, and/or professional or commercial licenses as specified by the sentencing judge which are provided by an agency of the United States or by appropriated funds of the United States. Contact the U.S. Department of Justice's Denial of Federal Benefits Project point of contact listed to determine the extent to which benefits have been denied. The denial shall terminate on the date included in the listing. Persons convicted for a third offense relating to distribution of controlled substances after the effective date of the Act shall be denied benefits permanently. Therefore, the termination date for such denials shall be listed as \"Permanent\" (Perm.). NOTE A denial of benefits under Section 5301 of the Anti-Drug Abuse Act of 1988 does not include benefits relating to long-term drug treatment programs for addiction for any person who declares himself an addict, provides a reasonable body of evidence to substantiate this declaration, and submits to a long-term treatment program for addiction, or is deemed to be rehabilitated pursuant to rules established by the Secretary of Health and Human Services. The denial of benefits may also be suspended on the basis of the person's participation or good faith effort to participate in a supervised rehabilitation program. Contact the U.S. Department of Justice's Denial of Federal Benefits Project point of contact listed to verify any assertions that the denial of benefits does not apply, or has been waived or suspended on this basis.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 81,
      "code": "DD",
      "cause": "Declared ineligible by the Secretary of Education in accordance with the Higher Education Act of 1965, 20 U.S.C. 1145g and the Drug-Free Schools and Communities Act of 1986, 20 U.S.C. 3224 based upon a failure to submit a certification of adoption and implementation of a drug prevention program.",
      "treatment": "Listed institutions of higher education, local educational agencies and State educational agencies are ineligible to receive any Federal contract or subcontract. An institution or agency remains ineligible until it submits the drug prevention program certification. Therefore, the termination date will be listed as \"Indefinite\" (Indef.). For further information, please contact the Department of Education point of contact listed under \u0013View Agency Contacts\u0014.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 82,
      "code": "EE",
      "cause": "Excluded by the Secretary of Education as required by the Higher Education Act of 1965, 20 U.S.C. 1145g and the Drug-Free Schools and Communities Act of 1986, 20 U.S.C. 3224a based on a violation of a certification of adoption and implementation of a drug prevention program.",
      "treatment": "Listed institutions of higher education, local educational agencies and State educational agencies are ineligible to receive any Federal contract or subcontract. An institution or agency must comply with the requirements and procedures for reinstatement of eligibility applicable to any Federal program under which it desires to receive Federal contracts or subcontracts. Therefore, the termination date will be listed as \"Indefinite\" (Indef.). Contact the Department of Education liaison if you need specific information concerning listed parties.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 84,
      "code": "03-SDNT-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to the Narcotics Trafficking Sanctions Regulations (31 CFR 536).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 88,
      "code": "C",
      "cause": "Debarred by the Comptroller General for violation of the Davis-Bacon Act, 40 U.S.C. 276a-2(a).",
      "treatment": "The contractor, or any firm, corporation, partnership, or association in which the contractor has an interest is ineligible to receive any contract or subcontract of the United States or District of Columbia and any contract or subcontract subject to the labor standards provisions of the statutes listed in 29 CFR 5.1 (see Code G). Debarment is for a three-year period to terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 89,
      "code": "C1",
      "cause": "Debarment under a settlement generally with DOL (consent) agreement in which the contractor agrees to be debarred to settle government charges that contractor violated the Davis-Bacon Act.",
      "treatment": "The contractor and any firm, corporation, partnership, or association, in which the contractor has an interest is ineligible to receive any contract or subcontract of the United States or District of Columbia or any contractor subcontract subject to the labor standards provisions of the statutes listed in 29 CFR 5.1 (see Code G). Debarment is for a three-year period. Debarment will terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 90,
      "code": "E",
      "cause": "Debarred by an agency for violation of the Buy American Act, 41 U.S.C. 10b(b).",
      "treatment": "Offers shall not be solicited from, nor contracts or subcontracts for the construction, alteration, or repair of public buildings or works, be awarded to, the listed contractor. The contractor may be solicited for offers and awarded contracts for other than construction, alteration, or repair of public buildings or works. Debarment will terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 91,
      "code": "H",
      "cause": "The convicted individual or entity listed under this code is subject to restrictions on its eligibility to participate in the Federal procurement(contracts and subcontracts) and non-procurement (assistance, loan and benefits, etc.), pursuant to section 306 of the Clean Air Act, 42 U.S.C. 7606, or section 508 of the Clean Water Act, 33 U.S.C. 1368, and Executive Order 11738. These restrictions require the award official to determine the ownership, lease and supervisory status of the bidder, offeror, applicant or potential benefit recipient, at the time of award, with respect to the violating facility and whether the award will be performed at that facility .",
      "treatment": "The convicted individual or entity is ineligible for award of a Federal contract, subcontract, assistance, loan, sub-agreement, or other benefit if he, she or it: (1) owns, leases or supervises the designated violating facility at the time of award; and (2) will perform any part of the award at the violating facility. This ineligibility applies unless the head of the Federal agency has exempted the award from this prohibition (see 40 CFR 32.215(b)), or the Environment Protection Agency (EPA) Debarring Official has certified that the conditions that gave rise to the conviction have been corrected. For more information about ineligibility under this cause and treatment code, please call the EPA point of contact listed under \u0013View Agency Contacts\u0014.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 92,
      "code": "03-SDNTK-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to the Foreign Narcotics Kingpin Sanctions Regulations (31 CFR 598).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 106,
      "code": "Z3",
      "cause": "Suspension by U.S. Office of Personnel Management from participation as a health care provider in the Federal Employees Health Benefits Program (FEHBP), under the authority of 5 U.S.C. 8902a and implementing regulations at 5 CFR Part 890, Subpart J.",
      "treatment": "Same as Code Z2, except that suspensions are temporary actions pending completion of investigative, legal, or other administrative action. Suspended providers are prohibited from receiving payment, directly or indirectly, from FEHBP funds for items or services furnished to an employee, annuitant, family member, or former spouse covered by a health benefits plan described by 5 U.S.C. 8903a or section 8903a. The termination date is listed as \"Indefinite\" (Indef.). ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 94,
      "code": "GG",
      "cause": "Declared ineligible for receipt of certain Department of Defense prime or subcontracts based on a finding by the Under Secretary of Defense (Acquisition and Technology), in accordance with section 2327 of Title 10, as amended by section 843 of National Defense Authorization Act for the Fiscal Year 1998, that the government of a terrorist country owns or controls a significant interest in the firm.",
      "treatment": "Listed firms are ineligible to receive any prime contract of $100,000 or more awarded by the Department of Defense(DoD)or any subcontract under such contracts in excess of $25,000 awarded by a DoD prime contractor. Therefore, DoD contracting officers shall not: (1) award any contract of $100,000 or more using DoD funds to such firms; or (2) consent to any subcontract in excess of $25,000 to such a firm under DoD contracts in excess of $100,000. DoD prime contractors with prime contracts in excess of $100,000 shall not enter into a subcontract in excess of $25,000 with any listed firm. For further information, please contact the DoD point of contact listed under \u0013View Agency Contacts\u0014.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 95,
      "code": "XXX",
      "cause": "Sanctioned by the Department of State pursuant to Executive Order No. 12938 (as amended by Executive Order No. 13094) and the underlying authority contained in the International Emergency Economic Powers Act (50 U.S.C. 1701 et seq.), the National Emergencies Act (50 U.S.C. 1601 et seq.), the Arms Export Control Act (22 U.S.C. 2751 et seq.), the Export Administration Act of 1979 (50 U.S.C. app. 2410c(a), 2410c(b)), and section 301 of title 3, United States Code, for engaging in proliferation activities related to missiles and/or weapons of mass destruction.",
      "treatment": "Departments and agencies of the U.S. Government are prohibited from contracting with, and procuring products, technology, and services from, listed entities. Agencies shall prohibit subcontracts with the listed entities. Exceptions to the ban on new contracts are possible to meet U.S. operational military requirements or requirements under defense production agreements; intelligence requirements; sole source suppliers, spare parts, components, routine servicing and maintenance of products for the U.S. Government; medical or humanitarian items; or performance pursuant to contracts in force on July 28, 1998, under appropriate circumstances. Inquiries about these exceptions should be referred to the General Counsel of the appropriate agency and to the Department of State, Bureau of International Security and Nonproliferation, Office of Missile, Biological, and Chemical Nonproliferation (State/ISN/MBC), the office of Counterproliferation Initiatives (State/ISN/CPI), and the Department of State, Office of the Legal Adviser, Nonproliferation and Verification (State/L/NPV). The sanctions normally expire in two years after their date of imposition, but some remain in effect indefinitely.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 96,
      "code": "YYY",
      "cause": "Sanctioned by the Department of State pursuant to section 81(a) of the Arms Export Control Act (22 U.S.C. 2798(a)), Section 11C(a) of the Export Administration Act of 1979 (50 U.S.C. app. 2410c(a)) (as carried out under Executive Order 12424 of August 19, 1994) for assisting a foreign chemical and/or biological weapons program.",
      "treatment": "Departments and agencies of the U.S. Government are prohibited from contracting with, and procuring products, and services from, listed entities. Agencies shall prohibit subcontracts with the listed entities. Contracts in force prior to the date sanctions were imposed are not affected. Exceptions to the ban on new contracts are possible to meet U.S. operational military requirements or requirements under defense production agreements; sole source suppliers, spare parts, components, routine servicing and maintenance of products; and, information and technology essential to U.S. products. Inquiries about exceptions should be referred to the General Counsel of the appropriate agency and to the Department of State, Bureau of International Security and Nonproliferation, Office of Missile, Biological, and Chemical Nonproliferation (State/ISN/MBC) and the Department of State, Office of the Legal Adviser, Nonproliferation and Verification (State/L/NPV). The sanctions remain in effect until lifted by notice issued by the Department of State. Therefore, termination date will be listed as \"Indefinite (Indef.).\"  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 97,
      "code": "ZZZ",
      "cause": "Sanctioned by the Department of State pursuant to section 73(a)(1) of the Arms Export Control Act (22 U.S.C. 2797b(a)(1)); Section 11B(b)(1) of the Export Administration Act of 1979 (50 U.S.C. app. 2410b(b)(1)), as carried out under Executive Order 13222 of August 17, 2001; and Executive Order 12851 of June 11, 1993 for engaging in missile proliferation activity.  Please note that the cause and treatment for this code is the same as for code VVV.",
      "treatment": "Except in the areas noted below, departments and agencies of the U.S. Government are prohibited from contracting with, and procuring products, technology, and services from, listed entities; and agencies are prohibited to subcontract with the listed entities. Contracts in force prior to the date sanctions were imposed are not affected. Procurement related to defense production agreements; or contracts with sole source suppliers that are essential to the national security, spare parts, components, routine servicing and maintenance of products , and information and technology essential to U.S. products or production, is not affected. Inquiries about these exceptions should be referred to the General Counsel of the appropriate agency and to the Department of State, Bureau of International Security and Nonproliferation, Office of Missile, Biological, and Chemical Nonproliferation (State/ISN/MBC) and the Department of State, Office of the Legal Adviser, Nonproliferation and Verification (State/L/NPV). The sanctions remain in effect for two years after their date of imposition.  Please note that the cause and treatment for this code is the same as for code VVV. ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 98,
      "code": "Z2",
      "cause": "Debarment by U.S. Office of Personnel Management from participation as a health care provider in the Federal Employees Health Benefits Program (FEHBP), under the authority of 5 U.S.C. 8902a and implementing regulations at 5 CFR Part 890, Subpart J.",
      "treatment": "Debarred providers are prohibited from receiving payment, directly or indirectly, from FEHBP funds for items or services furnished to an employee, annuitant, family member, or former spouse covered by a health benefits plan described by 5 U.S.C. 8903 or section 8903a. Debarments are for a specified period as determined by the OPM. However, all termination dates are listed as \"Indefinite\" (Indef.), because OPM must approve a reinstatement application before the provider may resume participation in the FEHBP. ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 107,
      "code": "RRR",
      "cause": "Declared disqualified or ineligible by the Department of Agriculture pursuant to 7 U.S.C. 1506(n) or 7 U.S.C. 1515(h) for willfully and intentionally providing false or inaccurate information to the Federal Crop Insurance Corporation or an approved insurance provider, as defined in section 502(b)(2) of the Federal Crop Insurance Act (7 USC 1502 (b)(2)).",
      "treatment": "Listed disqualified or ineligible persons are prohibited under 7 U.S.C. 1506(n) or 7 C.F.R. 151(h) from participating in any program administered by the Federal Crop Insurance Corporation or from receiving monetary or non-monetary benefits from certain other U.S. Department of Agriculture programs for a specified period. To ascertain the extent of the exclusion, or the limit on the person’s participation please call the USDA point of contact listed under “View Agency Contact.”  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 99,
      "code": "VVV",
      "cause": "Sanctioned by the Department of State pursuant to section 73(a)(1) of the Arms Export Control Act (22 U.S.C. 2797b(a)(1)), as amended by the National Defense Authorization Act for Fiscal Year 1991, and the National Defense Authorization Act for Fiscal Years 1992 and 1993 for engaging in missile proliferation.",
      "treatment": "Except in the areas noted below, departments and agencies of the U.S. Government are prohibited from contracting with listed entities, and procuring products, technology, and services from listed entities, in areas related to missile equipment and technology controlled on the Missile Technology Control Regime (MTCR) Equipment and Technology Annex; and agencies are prohibited to subcontract with the listed entities in areas related to such equipment and technology. Contracts in force prior to the date sanctions were imposed are not affected. Procurement related to defense production agreements; or contracts with sole source suppliers that are essential to the national security, spare parts, components, routine servicing and maintenance of products, and information and technology essential to U.S. products or production, is not affected. Inquiries about these exceptions should be referred to the General Counsel of the appropriate agency and to the Department of State, Bureau of International Security and Nonproliferation, Office of Missile Threat Reduction (State/ISN/MTR) and the Department of State, Office of the Legal Adviser (L/NPV). The sanctions remain in effect for two years after their date of imposition. Please note that the cause and treatment for this code is the same as for code ZZZ.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 100,
      "code": "JJ",
      "cause": "Sanctioned by the Department of State pursuant to Section 3 of the Iran, North Korea, and Syria Nonproliferation Act of 2006 (P.L. 109-353) (“the Act”) for engaging in transfers to or from Iran, North Korea, or Syria of proliferation-related items required to be reported to Congress under the Act. ",
      "treatment": "No department or agency of the U.S. Government may procure, or enter into, any contract for the procurement of any goods, technology, or services from listed entities. Departments and agencies shall prohibit subcontracts with the listed entities. Contracts in force prior to the date sanctions were imposed shall be terminated. Departments and agencies, acting in consultation with the Secretary of State, may, by license, regulation, order, directive, exception, or otherwise, provide for: (1) procurement contracts necessary to meet U.S. operational military requirements or requirements under defense production agreements; intelligence requirements, sole source suppliers, spare parts, components, routine servicing and maintenance of products for the United States Government; and medical and humanitarian items; and, (2) performance pursuant to contracts in force on the effective date of the sanctions order, under appropriate circumstances. Inquiries about these exceptions should be referred to the General Counsel of the appropriate agency and to the Department of State, Bureau of International Security and Nonproliferation, Office of Missile, Biological, and Chemical Nonproliferation (State/ISN/MBC)and the Department of State, Office of the Legal Adviser, Nonproliferation and Verification (State/L/NPV). The sanctions remain in effect for the period of time specified in the sanctions order or until lifted by subsequent notice issued by the Department of State.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 101,
      "code": "H2",
      "cause": "For further information, please call the EPA point of contact listed under \u0013View Agency Contacts\u0014.",
      "treatment": "For further information, please call the EPA point of contact listed under \u0013View Agency Contacts\u0014.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 102,
      "code": "JJJ",
      "cause": "Sanctioned by the Department of State pursuant to Section 1604 of the Iran-Iraq Arms Non-Proliferation Act of 1992 (P.L. 102-484)(\"the Act\") for engaging in transfers to Iran or Iraq of proliferation-related items required to be reported to Congress under the Act.",
      "treatment": "No department or agency of the U.S. Government may procure, or enter into, any contract for the procurement of any goods or services from listed entities. Departments and agencies shall prohibit subcontracts with the listed entities. Inquiries should be referred to the General Counsel of the appropriate agency and to the Department of State, Bureau of International Security and Nonproliferation, Office of Missile, Biological, and Chemical Nonproliferation (State/ISN/MBC) and the Department of State, Office of the Legal Adviser, Nonproliferation and Verification (State/L/NPV). The sanctions remain in effect for the period of two years.   ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 103,
      "code": "R1",
      "cause": "Debarment by the U.S. Agency for International Development pursuant to 22 C.F.R. § 208.305, where such offense or cause relates to obtaining or performing work under, or otherwise in connection with, a USAID-financed transaction in which the government of a foreign country, or an instrumentality thereof, is made responsible under governing USAID regulations for awarding and carrying out the acquisition or assistance instrument, and is the party signatory to the pertinent USAID- financed acquisition or assistance instrument. Examples of such USAID-financed transactions include, but are not limited to, Host Country Contracts and Commodity Import Programs.",
      "treatment": "Persons are excluded from competing for new work, receiving new work, and/or receiving renewals or extensions (other than no-cost time extensions) of existing work under any USAID-financed transaction financed in whole or in part with funds made available under the Foreign Assistance Act (FAA) of 1961, as amended, in which the government of a foreign country, or an instrumentality thereof, is made responsible under governing USAID regulations for awarding and carrying out the acquisition or assistance instrument, and is the party signatory to the pertinent USAID-financed procurement or grant instrument.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 104,
      "code": "S1",
      "cause": "Suspension by the U.S. Agency for International Development pursuant to 22 C.F.R. § 208.405, where such offense or cause relates to obtaining or performing work under, or otherwise in connection with, a USAID-financed transaction in which the government of a foreign country, or an instrumentality thereof, is made responsible under governing USAID regulations for awarding and carrying out the acquisition or assistance instrument, and is the party signatory to the pertinent USAID- financed acquisition or assistance instrument. Examples of such USAID-financed transactions include, but are not limited to, Host Country Contracts and Commodity Import Programs.",
      "treatment": "Persons are excluded from competing for new work, receiving new work, and/or receiving renewals or extensions (other than no-cost time extensions) of existing work under any USAID-financed transaction financed in whole or in part with funds made available under the Foreign Assistance Act (FAA) of 1961, as amended, in which the government of a foreign country, or an instrumentality thereof, is made responsible under governing USAID regulations for awarding and carrying out the acquisition or assistance instrument, and is the party signatory to the pertinent USAID-financed procurement or grant instrument.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Pending)",
      "exclusionTypeId": 1
    },
    {
      "id": 105,
      "code": "03-SDT-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to the Terrorism Sanctions Regulations (31 CFR Part 595).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 108,
      "code": "03-BSE-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to the Burmese Sanctions Regulations (31 CFR Part 537).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 109,
      "code": "03-DP-01",
      "cause": "Subject to a Denial Order issued by the Department of Commerce, Bureau of Industry and Security based on a violation of the Export Administration Regulations (EAR)(15 C.F.R. §730 et. seq.).",
      "treatment": "Persons subject to a standard denial order issued by the Department of Commerce, Bureau of Industry and Security (denied persons), may not engage in export or reexport transactions involving a commodity, software or technology subject to the EAR, or have access to items subject to the EAR that will be exported. A non-standard denial order, usually narrower in geographic scope, may also be issued. Denial orders only apply to transactions ?subject to the EAR,? a term that generally excludes domestic commercial transactions. The failure by any person to comply with any denial order is a violation of §764.2(k) of the EAR. The Department of Commerce may grant authorization to engage in actions otherwise prohibited by a denial order. Please contact the Department of Commerce, Bureau of Industry and Security, Office of Enforcement Analysis at (202) 482-4255 for more information on denied persons.",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 110,
      "code": "10-VA-01",
      "cause": "Debarment by the United States Department of Veterans Affairs (VA) pursuant to 38 United States Code 8127(g), for any business concern that is determined by the Secretary of VA to have misrepresented the status of that concern as a small business concern owned and controlled by veterans or as a small business concern owned and controlled by service-disabled veterans for purposes of 38 USC 8127 acquisitions.",
      "treatment": "Contractors are excluded from receiving VA prime contracts or VA subcontracts, and VA shall not solicit offers from, award actions to renew or otherwise extend the duration of current acquisitions, or consent to subcontracts with these contractors, unless VA determines that there is a compelling reason for such action. Debarments are for a specified term, up to five years, as determined by the debarring agency and as indicated in the listing.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 111,
      "code": "I1",
      "cause": "Declared ineligible based on a finding by the Principal Deputy Under Secretary of Defense for Personnel and Readiness, under 10 U.S.C. 983, as amended by Section 552 of the Ronald W. Reagan National Defense Authorization Act for Fiscal Year 2005 (P.L. 108-375) and 32 CFR Part 216, that the institution of higher education (or any subelement of that institution) has a policy or practice (regardless of when implemented) that either prohibits, or in effect prevents (1) the Secretary of a military department from maintaining, establishing, or operating a unit of the Senior Reserve Officer Training Corps (ROTC) at that institution (or any subelement of that institution), or a student at that institution (or any subelement of that institution) from enrolling in a unit of the Senior ROTC at another institution of higher education; or (2) the Secretary of a Military Department or Secretary of Homeland Security, for military recruiting purposes, from gaining access to their campuses or access to their students on campus in a manner that is at least equal in quality and scope to the access to campuses and to students that is provided to any other employer, or access to student-recruiting information.",
      "treatment": "Listed institutions of higher education are ineligible to receive the following funds (hereafter referred to as “affected agencies’ funds”) through any Federal contract, grant, or cooperative agreement: any funds made available for the Departments of Defense, Transportation, Homeland Security, Energy (National Nuclear Security Administration), the Central Intelligence Agency, or for any department or agency in which regular appropriations are made in the Departments of Labor, Health and Human Services, and Education, and Related Agencies Appropriations Act. Related Agencies refers to the Armed Forces Retirement Home, the Corporation for National and Community Service, the Corporation for Public Broadcasting, the Federal Mediation and Conciliation Service, the Federal Mine Safety and Health Review Commission, the National Commission on Libraries and Information Science, the National Council on Disability, the National Education Goals Panel, the National Labor Relations Board, the National Mediation Board, the Occupational Safety and Health Review Commission, the Social Security Administration, the Railroad Retirement Board and the United States Institute of Peace. Therefore, no Federal agency may: (1) award any contract, grant, or cooperative agreement using affected agencies’ funds to a listed institution of higher education; (2) obligate additional affected agency funds (e.g., through an incremental funding action) for an existing contract, grant, or cooperative agreement to such an institution; (3) consent to any subcontract or subaward of affected agencies’ funds to such an institution under any contract, grant, or cooperative agreement, if such subcontract or subaward requires the agency’s consent; or (4) make any further payment of affected agencies’ funds under any existing contracts, grants or cooperative agreements, once an institution has been determined to be ineligible. Exception: Any federal funding that is provided to an institution of higher education, or to an individual, to be available solely for student financial assistance, related administrative costs, or costs associated with attendance, may be used for the purpose for which funding is provided. Contact the Office of Under Secretary of Defense for Personnel and Readiness, Military Personnel Policy if you need specific information concerning listed parties.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 112,
      "code": "10-VA-02",
      "cause": "Debarment by the United States Department of Veterans Affairs (VA) pursuant to Veterans Affairs Acquisition Regulations (VAAR) Subpart 809.4—Debarment, Suspension, and Ineligibility, for any deliberate violation of the limitation on subcontracting clause requirements relating to 38 USC 8127 acquisitions",
      "treatment": "Contractors are excluded from receiving VA prime contracts or VA subcontracts, and VA shall not solicit offers from, award actions to renew or otherwise extend the duration of current acquisitions, or consent to subcontracts with these contractors, unless VA determines that there is a compelling reason for such action. Debarments are for a specified term as determined by the debarring agency and as indicated in the listing.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 113,
      "code": "10-ISA-01",
      "cause": "Sanctioned by the Department of State pursuant to the Iran Sanctions Act of 1996, as amended, for being determined to have engaged in, or to own or control a person or entity who has engaged in, certain energy or weapons-related activities involving Iran. (50 U.S.C. §1701 note).",
      "treatment": "No department or agency of the U.S. Government may procure, or enter into any contract for the procurement of, any goods or services for a period of two years with listed persons or entities, except for eligible products, as defined in section 308(4) of the Trade Agreements Act of 1979 (19 U.S.C. § 2518(4)), of any foreign country or instrumentality designated under section 301(b) of the Act (19 U.S.C. § 2511(b)), or unless subsequently waived or excepted pursuant to the authorities of the Iran Sanctions Act of 1996, as amended.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 115,
      "code": "BPI-SDNTK",
      "cause": "This individual or entity may be blocked pending investigation pursuant to sanctions pursuant to the Foreign Narcotics Kingpin Sanctions Regulations (31 CFR 598).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 116,
      "code": "J",
      "cause": "Debarment by an agency pursuant to Federal Property Management Regulations (FPMR) 101-45.6 for one or more of the following causes: (a) conviction of or civil judgment for fraud, violation of antitrust laws, embezzlement, theft, forgery, bribery, false statements, or other offenses indicating a lack of business integrity, (b) violation of terms of a Government contract, such as a willful failure to perform in accordance with its terms or a history of failure to perform; or (c) any other cause of a serious and compelling nature affecting responsibility.",
      "treatment": "Contractors are excluded from receiving contracts to purchase Federal personal property and from directly or indirectly receiving benefits under Federal nonprocurement programs, and agencies shall not solicit offers from, award contracts to, renew or otherwise extend the duration of current contracts, or consent to subcontracts with these contractors, unless the acquiring agency's head or a designee determines that there is a compelling reason for such action. Debarments are for a specified term as determined by the debarring agency and as indicated in the listing (see Note following Code K).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 117,
      "code": "CC",
      "cause": "Excluded by a Federal agency from acting as an individual surety pursuant to FAR 28.203-7 for one or more of the following causes: failure to fulfill the obligations under any bond; failure to disclose all bond obligations, misrepresentation of the value of available assets or outstanding liabilities; false or misleading statement, signature or representation on a bond or affidavit of individual suretyship, or any other cause affecting responsibility as a surety of such serious and compelling nature as may be determined to warrant exclusion.",
      "treatment": "Bonds shall not be accepted from listed party unless the acquiring agencies head or designee determines that there is a compelling reason to do so. The listed party is also precluded from acting as a contractor as defined at FAR 9.403. The exclusion will terminate on the date shown.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 118,
      "code": "U",
      "cause": "Declared ineligible by the Secretary of Labor in accordance with Executive Order No. 11246, as amended (30 FR 12319, September 28, 1965; 32 FR 14303, October 13, 1967; 43 FR 46501, October 5, 1978), and based on the contractor's or subcontractor's failure to satisfy its obligations under the Equal Opportunity Clause of a federally assisted construction contract.",
      "treatment": "The contractor or subcontractor and its officers, agents, successors, divisions and subsidiaries are ineligible for the award of any federally assisted construction contract or subcontract, or for the extension or modification of existing federally assisted construction contracts or subcontracts. Debarment is for an indefinite period of time pending the contractor's or subcontractor's compliance with Executive Order 11246 and its implementing regulations. Therefore, termination date will be listed as \"Indefinite (Indef.).  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 121,
      "code": "03-ENT-01",
      "cause": "This foreign organization has been determined by the Department of Commerce, Bureau of Industry and Security, to be subject to special licensing requirements primarily based upon involvement in the development of weapons of mass destruction or the missiles used to deliver those weapons. Therefore, it has been placed on the ?Entity List?, which is included within the Export Administration Regulations (EAR) and is found at 15 C.F.R. 744 Supp. 4.",
      "treatment": "Although treatment varies for each person on the Entity List, usually a license is required from the Bureau of Industry and Security to export or reexport specified items to such persons. The Entity List (15 C.F.R. 744 Supp. 4) sets forth the licensing requirements applicable to listed persons. Placement on the Entity List is published in the Federal Register. The Bureau of Industry and Security may approve license applications for transactions involving persons in certain circumstances. Please contact the Department of Commerce, Bureau of Industry and Security, Office of Exporter Services at (202) 482-3298 for more information on transactions involving persons on the Entity List.",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 122,
      "code": "03-FTO-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to the Foreign Terrorist Organization Sanctions Regulations (31 CFR Part 597).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 123,
      "code": "03-SDGT-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to Executive Order 13224 of September 23, 2001 (Blocking Property and Prohibiting Transactions with Persons Who Commit, Threaten to Commit, or Support Terrorism).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance:  http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 124,
      "code": "03-SDN-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to the Foreign Assets Control Regulations (31 CFR 500); the [Cuban Assets Control Regulations (31 CFR 515)]; the Sudanese Sanctions Regulations (31 CFR 538); the Libyan Sanctions Regulations (31 CFR Part 550); the Iranian Transactions Regulations (31 CFR Part 560); the Iraqi Sanctions Regulations (31 CFR Part 575) or the Western Balkan Stabilization Regulations (31 CFR Part 588); Burmese Sanctions Regulations (31 CFR Part 537); or the Zimbabwe sanctions (Executive Order 13288).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 125,
      "code": "03-TLGE-01",
      "cause": "This individual or entity may be subject to sanctions pursuant to the Terrorism List Governments sanctions regulations (31 CFR Part 596).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 126,
      "code": "BPI-SDGT",
      "cause": "This individual or entity may be blocked pending investigation pursuant to Executive Order 13224 of September 23, 2001 (Blocking Property and Prohibiting Transactions with Persons Who Commit, Threaten to Commit, or Support Terrorism).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 127,
      "code": "BPI-SDNT",
      "cause": "This individual or entity may be blocked pending investigation pursuant to the Narcotics Trafficking Sanctions Regulations (31 CFR 536).",
      "treatment": "If you think you have a potential match, please visit the following section of OFAC's website for guidance: http://www.treasury.gov/resource-center/faqs/Sanctions/Pages/directions.aspx .",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 129,
      "code": "08-INA-01",
      "cause": "Debarment for civil actions, with respect to the issuance of a Final Order to cease and desist and pay a civil monetary penalty. Once the Secretary of Homeland Security or the Attorney General makes a determination of noncompliance with the Immigration and Nationality Act (INA)-Unlawful Employment of Aliens, and transmits such determination to a Federal agency, that agency may impose a debarment, pursuant to Executive Order 12989, as amended, for one or more of the following causes listed in Section 274A of the INA: 8 U.S.C. 1324a(a)(1)(A) Knowing Hire; or 8 U.S.C. 1324a(a)(2) Continuing to Employ.",
      "treatment": "Contractors are excluded from receiving contracts and from directly or indirectly receiving benefits under Federal nonprocurement programs, and agencies shall not solicit offers from, award contracts to, renew or otherwise extend the duration of current contracts, or consent to subcontracts with these contractors, unless the acquiring agency’s head or a designee determines that there is a compelling reason for such action. Government prime contractors, when required by the terms of their contract, shall not enter into any subcontract equal to or in excess of $30,000 with a contractor that is debarred, suspended, or proposed for debarment, unless there is a compelling reason to do so. Exceptions to this treatment require a written determination by the head of the Federal agency or designee stating the reasons for entering into the transaction. Debarments are for one year, and may be extended for additional one year increments if continuing violations are found by the Secretary of Homeland Security or the Attorney General.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 130,
      "code": "10-CIS-01",
      "cause": "Sanctioned by the Department of State pursuant to the Comprehensive Iran Sanctions, Accountability and Divestment Act of 2010, and regulations prescribed by the President and delegated to the Secretary of State, for exporting sensitive technology to Iran. (22 U.S.C. § 8515). Sensitive technology means hardware, software, telecommunications equipment, or any other technology, that the President, delegated to the Secretary of State, determines is to be used specifically to restrict the free flow of unbiased information in Iran; or to disrupt, monitor, or otherwise restrict speech of the people of Iran (exceptions to the definition of sensitive technology are enumerated in 22 U.S.C. § 8515(c)(2)).",
      "treatment": "No department of agency of the U.S. Government may enter into or renew a contract with listed persons or entities for the procurement of goods or services, except for eligible products, as defined in section 308(4) of the Trade Agreements Act of 1979 (19 U.S.C. § 2519(4)) of any foreign country or instrumentality designated under section 301(b) of that Act (19 U.S.C. § 2511(b)), or unless waived pursuant to the authorities of the Comprehensive Iran Sanctions, Accountability and Divestment Act of 2010.  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 131,
      "code": "08-INA-02",
      "cause": "Debarment for a criminal conviction under Sections 274 or 274A of the Immigration and Nationality Act (INA) (8 USC 1324 or 1324a).",
      "treatment": "Contractors are excluded from receiving contracts and from directly or indirectly receiving benefits under Federal nonprocurement programs, and agencies shall not solicit offers from, award contracts to renew or otherwise extend the duration of current contracts, or consent to subcontracts with these contractors, unless the acquiring agency’s head or a designee determines that there is a compelling reason for such action. Government prime contractors, when required by the terms of their contract, shall not enter into any subcontract equal to or in excess of $30,000 with a contractor that is debarred, suspended, or proposed for debarment, unless there is a compelling reason to do so. Exceptions to this treatment require a written determination by the head of the Federal agency or designee stating the reasons for entering into the transaction. Debarments are for a specified term as determined by the debarring agency and as indicated in the listing.  ",
      "active": true,
      "exclusionType": "Ineligible (Proceedings Completed)",
      "exclusionTypeId": 2
    },
    {
      "id": 132,
      "code": "11-USDA-01",
      "cause": "Permanently debarred by the United States Department of Agriculture (USDA) from participation in USDA programs pursuant to 7 U.S.C. § 2209j and 2 C.F.R. § 417.865(d), based on a conviction for a felony for knowingly defrauding the United States in connection with a program administered by USDA.",
      "treatment": "Debarred persons are permanently excluded from participating in USDA programs, subject to the exemption for USDA domestic food assistance programs described in 2 C.F.R. § 417.865(d)(2).  ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    },
    {
      "id": 134,
      "code": "Z",
      "cause": "Excluded by the Department of Health and Human Services from participation in Title XVIII (Medicare), Title XIX (Medicaid), Title V (Maternal and Child Health Programs) and Title XX (Block Grants to States for Social Services Programs) of the Social Security Act under the authority of Title XI of that Act, and all other Federal nonprocurement programs.",
      "treatment": "Exclusions are limited to the four specific health care programs referred to above. The effect of an exclusion is that payment may not be made by the programs for any items or services furnished (except an emergency item or service) by an excluded party. If the party is a physician, no payment may be made for any items or services furnished, ordered, or prescribed. This code is applicable only to those parties who were excluded prior to the enactment of the Federal Acquisition Streamlining Act in 1994, after which the scope of all exclusions encompasses both Federal procurement and nonprocurement programs ",
      "active": true,
      "exclusionType": "Prohibition/Restriction",
      "exclusionTypeId": 3
    }
  ];

  constructor(public service: AutocompleteService) {

    this.service.setData(this.ctCodeResultAll);
    this.setup();

  }

  setup() {
    this.autcompleteSettings.primaryKeyField = 'code';
    this.autcompleteSettings.id = 'code';
    this.autcompleteSettings.labelText = 'CT Code';
    this.autcompleteSettings.primaryTextField = 'code';
    this.autcompleteSettings.selectionMode = SelectionMode.SINGLE;
    this.autcompleteSettings.autocompletePlaceHolderText = 'eg: RR';
    this.autcompleteSettings.hideChips = true;
  }

  handleSubmit($event) {
    console.log($event);
  }

  onSearchModelChange($event) {
    console.log($event);
  }

  onFilterChange($event) {
    console.log('---Consumer listener---')
    console.log($event);
    this.updatedModel = $event;
  }
}


@Injectable({ providedIn: 'root' })
export class AutocompleteService implements SDSAutocompleteServiceInterface {
  private loadedData: CTCode[];
  constructor() {
    //Left blank intentionally
  }
  setData(data) {
    this.loadedData = data;
  }

  getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    let items = [];
    if (this.loadedData) {
      this.loadedData.forEach(ctCode => {
        if (ctCode.code.includes(searchValue.toUpperCase())) {
          items.push({
            code: `${ctCode.code}`,
          });
        }
      });
    }
    return of({
      items: items,
      totalItems: items.length
    });
  }
}


export interface CTCode {

  id?: number;
  type?: string;
  code?: string;
  cause?: string;
  treatment?: string;
  active?: boolean;
  exclusionType?: string;
  exclusionTypeId?: number;

}