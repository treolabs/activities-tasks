/**
 * ActivitiesTasks
 * TreoLabs Free Module
 * Copyright (c) TreoLabs GmbH
 *
 * This Software is the property of TreoLabs GmbH and is protected
 * by copyright law - it is NOT Freeware and can be used only in one project
 * under a proprietary license, which is delivered along with this program.
 * If not, see <https://treolabs.com/eula>.
 *
 * This Software is distributed as is, with LIMITED WARRANTY AND LIABILITY.
 * Any unauthorised use of this Software without a valid license is
 * a violation of the License Agreement.
 *
 * According to the terms of the license you shall not resell, sublicense,
 * rent, lease, distribute or otherwise transfer rights or usage of this
 * Software or its derivatives. You may modify the code of this Software
 * for your own needs, if source code is provided.
 */

Espo.define('activitiestasks:views/user/record/panels/tasks', 'activitiestasks:views/record/panels/tasks', function (Dep) {

    return Dep.extend({

        listLayout: {
            rows: [
                [
                    {
                        name: 'name',
                        link: true,
                    },
                    {
                        name: 'isOverdue'
                    }
                ],
                [
                    {name: 'status'},
                    {name: 'dateEnd'}
                ]
            ]
        },

        setup: function () {
            Dep.prototype.setup.call(this);

            if (this.getMetadata().get(['entityDefs', 'Task', 'fields', 'assignedUsers'])) {
                var foreignLink = this.getMetadata().get(['entityDefs', 'Task', 'links', 'assignedUsers', 'foreign']);
                if (foreignLink) {
                    this.link = foreignLink;
                }
            }
        }

    });

});
