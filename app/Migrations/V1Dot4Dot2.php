<?php
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

declare(strict_types=1);

namespace ActivitiesTasks\Migrations;

use Treo\Core\Migration\AbstractMigration;

/**
 * Migration class for version 1.4.2
 *
 * @author r.ratsun@treolabs.com
 */
class V1Dot4Dot2 extends AbstractMigration
{
    /**
     * Up to current
     */
    public function up(): void
    {
        $historyEntityList = $this->getConfig()->get('historyEntityList');
        if (!empty($historyEntityList) && is_array($historyEntityList)) {
            $newHistoryEntityList = [];
            foreach ($historyEntityList as $v) {
                if ($v != 'Email') {
                    $newHistoryEntityList[] = $v;
                }
            }

            $this->getConfig()->set('historyEntityList', $newHistoryEntityList);
            $this->getConfig()->save();
        }
    }
}
